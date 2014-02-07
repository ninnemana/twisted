var express = require('express'),
	http = require('http'),
	path = require('path'),
	config = require('./config')(),
	app = express(),
	//MongoClient = require('mongodb').MongoClient,
	Home = require('./controllers/home');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/templates');
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('fast-delivery-site'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

if('development' == app.get('env')){
	app.use(express.errorHandler());
}

app.get('/', function(req, res, next){
	Home.run(req,res,next);
});

http.createServer(app).listen(process.env.PORT || config.port, function(){
	console.log(
		'Express server listening on port ' + process.env.PORT || config.port
	);
});
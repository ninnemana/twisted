'use strict';

//Setting up route
angular.module('twisted',['ngRoute']).config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/bio', {
			controller: 'BioController',
			templateUrl: 'views/bio.html'
		}).
		when('/events', {
			controller: 'EventsController',
			templateUrl: 'views/events.html'
		}).
		when('/news', {
			controller: 'NewsController',
			templateUrl: 'views/news.html'
		}).
		when('/pics', {
			controller: 'PhotoController',
			templateUrl: 'views/pics.html'
		}).
		when('/videos', {
			controller: 'VideoController',
			templateUrl: 'views/video.html'
		}).
		when('/contact', {
			controller: 'ContactController',
			templateUrl: 'views/contact.html'
		}).
		when('/', {
			controller: 'IndexController',
			templateUrl: 'views/index.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);

//Setting HTML5 Location Mode
angular.module('twisted').config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);
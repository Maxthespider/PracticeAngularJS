var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'file.html'
	})
	.when('/helloUser', {
		templateUrl: 'hello.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
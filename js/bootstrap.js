// var $routeProvider = angular.module('app', ['ngRoute']);


var ColorMatch = angular.module('ColorMatch', ['uiSlider', 'ngRoute', 'ColorMatch.GameModule']).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'templates/base.tpl.html' });
	console.log('Things fired.');


}]);

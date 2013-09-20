var GameModule = angular.module('ColorMatch.GameModule', ['uiSlider','ngRoute' ]);

GameModule.controller( 'GameModuleCtrl', ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {

	$scope.randomRedValue = 0;
	$scope.randomGreenValue = 0;
	$scope.randomBlueValue = 0;

	$scope.userRedValue = 0;
	$scope.userGreenValue = 0;
	$scope.userBlueValue = 0;

	$scope.redDiff = 0;
	$scope.greenDiff = 0;
	$scope.blueDiff = 0;

	$scope.startGame = function(value) {

		// var random = Math.floor((Math.random()*255)+1);
		// console.log('You clicked Start!', random);
		$scope.randomRedValue = Math.floor((Math.random()*255)+1);Math.floor((Math.random()*255)+1);
		$scope.randomGreenValue = Math.floor((Math.random()*255)+1);
		$scope.randomBlueValue = Math.floor((Math.random()*255)+1);
	}

	$scope.submitGuess = function() {
		// console.log('You clicked Submit!');
		// scope.redDiff = $scope.randomRedValue - $scope.userRedValue;
		// scope.blueDiff = $scope.randomGreenValue - $scope.userGreenValue;
		// scope.greenDiff = $scope.randomBlueValue - $scope.userBlueValue;
		var redDiff = $scope.randomRedValue - $scope.userRedValue;
		var blueDiff = $scope.randomGreenValue - $scope.userGreenValue;
		var greenDiff = $scope.randomBlueValue - $scope.userBlueValue;
		alert('you were this close - red: ' + redDiff + ' green: ' + greenDiff + ' blue: ' + blueDiff);
	}

}] );


GameModule.directive('gameModule', [ function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: 'GameModuleCtrl',
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'templates/game.tpl.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}]);
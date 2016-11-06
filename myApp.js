var app = angular.module("myApp", ["ngMaterial"]);

app.controller("toDoList", function ($scope) {
	$scope.toDoList = ["Create a company", "Call in barber shop", "Earn a lot of money", "Go to the shop", "Buy gifts", "Brush teeth"];
	// добавляет элемент в список
	$scope.addItem = function () {
			// выдать ошибку если элемент дуплекат
			$scope.errortext = "";
			if (!$scope.addMe) {
				return;
			}
			if ($scope.toDoList.indexOf($scope.addMe) == -1) {
				$scope.toDoList.push($scope.addMe);
			} else {
				$scope.errortext = "Already in your list.";
			}
		}
		// удаляет элемент из списка
	$scope.removeItem = function (item) {
		$scope.errortext = "";
		$scope.toDoList.splice(item, 1);
	}
});

app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	$scope.toggleLeft = buildDelayedToggler('left');
	$scope.toggleRight = buildToggler('right');
	$scope.isOpenRight = function () {
		return $mdSidenav('right').isOpen();
	};
	// User photo and name
	var imagePath = 'img/userPhoto.jpg';
	$scope.messages = [{
		face: imagePath,
		name: 'Trevor Reyes'
    }];
	/**
	 * Supplies a function that will continue to operate until the
	 * time is up.
	 */
	function debounce(func, wait, context) {
		var timer;

		return function debounced() {
			var context = $scope,
				args = Array.prototype.slice.call(arguments);
			$timeout.cancel(timer);
			timer = $timeout(function () {
				timer = undefined;
				func.apply(context, args);
			}, wait || 10);
		};
	}
	/**
	 * Build handler to open/close a SideNav; when animation finishes
	 * report completion in console
	 */
	function buildDelayedToggler(navID) {
		return debounce(function () {
			// Component lookup should always be available since we are not using `ng-if`
			$mdSidenav(navID)
				.toggle()
				.then(function () {
					$log.debug("toggle " + navID + " is done");
				});
		}, 200);
	}

	function buildToggler(navID) {
		return function () {
			// Component lookup should always be available since we are not using `ng-if`
			$mdSidenav(navID)
				.toggle()
				.then(function () {
					$log.debug("toggle " + navID + " is done");
				});
		};
	}
});

app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function () {
		// Component lookup should always be available since we are not using `ng-if`
		$mdSidenav('left').close()
			.then(function () {
				$log.debug("close LEFT is done");
			});

	};
});
app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function () {
		// Component lookup should always be available since we are not using `ng-if`
		$mdSidenav('right').close()
			.then(function () {
				$log.debug("close RIGHT is done");
			});
	};
});
// Configuring theme if needed
app.config(function ($mdThemingProvider) {
	// Configure a dark theme
	$mdThemingProvider.theme('myTheme', 'default')
		.primaryPalette('grey')
		.dark();
});

/*
app.directive('userCard', function () {
    return {
      restrict: 'E',
      templateUrl: 'userCard.tmpl.html',
      scope: {
        name: '@',
        theme: '@'
      },
      controller: function ($scope) {
        $scope.theme = $scope.theme || 'default';
      }
    }
});
*/
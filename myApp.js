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
	//$scope.toggleRight = buildToggler('newTask');
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
/*
app.controller('NewTaskCtrl', function ($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function () {
		// Component lookup should always be available since we are not using `ng-if`
		$mdSidenav('newTask').close()
			.then(function () {
				$log.debug("close New Task Sidebar is done");
			});
	};
});
*/
// Configuring theme if needed
app.config(function ($mdThemingProvider) {
	// Configure a dark theme
	$mdThemingProvider.theme('myTheme', 'default')
		.primaryPalette('grey')
		.dark();
});

app.controller('menuController', function menuController ($scope, $mdDialog) {
	var originatorEv;
	
	this.openMenu = function($mdOpenMenu, ev) {
		originatorEv = ev;
	    $mdOpenMenu(ev);
	};
	
	this.menuItemClick = function(index) {
	   $mdDialog.show(
		  $mdDialog.alert()
			.title('Hello')
			.textContent('Menu Item clicked, index: ' + index)
			.ok('OK')
			.targetEvent(originatorEv)
	   );
	   originatorEv = null;
	};
});

app.controller('taskCtrl', function ($scope){
	$scope.date = new Date();
	var self = this;
		
	self.tasks = [{
		'id': 1,
		'taskName': 'Create a company',
		'Date': 'Today',
		'taskContent': 'Bla Bla 12345' 
	}, {
		'id': 2,
		'taskName': 'Call in barber shop',
		'Date': 'Tomorrow',
		'taskContent': 'Bla Bla 12345' 
	}, {
		'id': 3,
		'taskName': 'Earn a lot of money',
		'Date': 'Friday (09.06.2016)',
		'taskContent': 'Bla Bla 12345' 
	},  {
		'id': 4,
		'taskName': 'Go to the shop',
		'Date': 'Friday (09.06.2016)',
		'taskContent': 'Bla Bla 12345' 
	}];
	self.selectedId = 2;
	
});
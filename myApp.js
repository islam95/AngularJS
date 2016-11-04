var app = angular.module("toDoApp", ["ngMaterial"]);

app.controller("toDoList", function($scope){
	$scope.toDoList = ["Create a company", "Call in barber shop", "Earn a lot of money", "Go to the shop", "Buy gifts", "Brush teeth"];
	// добавляет элемент в список
	$scope.addItem = function (){
		// выдать ошибку если элемент дуплекат
		$scope.errortext = "";
		if (!$scope.addMe) {return;}
		if ($scope.toDoList.indexOf($scope.addMe) == -1){
			$scope.toDoList.push($scope.addMe);
		} else {
			$scope.errortext = "The item is already in your list.";
		}
	}
	// удаляет элемент из списка
	$scope.removeItem = function(item){
		$scope.errortext = "";
		$scope.toDoList.splice(item, 1);
	}
});


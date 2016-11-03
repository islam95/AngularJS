var app = angular.module("toDoApp", []);

app.controller("toDoList", function($scope){
	$scope.toDoList = ["to do this", "something", "do something else"];
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


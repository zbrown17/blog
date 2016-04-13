angular
	.module('ProjectMod', [])
	    .controller('ProjectCtrl', ["$scope", '$http', function ($scope, $http){
        var baseUrl = 'http://www.omdbapi.com/?';
        $scope.titleSearch = undefined;
        $scope.yearSearch = undefined;
        $scope.typeSearch = undefined;
        
        $scope.search = function () {
            $http.get(baseUrl + 's=' + 
                    $scope.titleSearch + '&y=' + $scope.yearSearch + '&type=' + $scope.typeSearch).then(function(response){
                    $scope.results = response.data.Search;
            })
        }
    //next    
        
var baseUrl2 = 'http://mean.codingcamp.us/gavin/todo/';
        
    $http.get(baseUrl2).then(function(response){
        $scope.toDo = response.data;
        console.log(response.data);
        })

    $scope.addToDo = {
        title: undefined , 
        description: undefined ,
        price: undefined ,
        imgUrl: undefined ,
        completed: false
    };

    $scope.addDo = function () {
        $http.post(baseUrl2, $scope.addToDo).then(function (response){
            $scope.toDo.push(response.data);
            console.log($scope.toDo);
        }, function (error){
            console.log(error);
        })
    }

    $scope.deleteItem = function (index) {
        var id = $scope.toDo[index]._id;
        $http.delete(baseUrl2 + id).then(function(response) {
            $scope.toDo.splice(index, 1);
        })
    }

    $scope.updateToDo = function (index) {
        var qqq = $scope.toDo[index];
        $http.put(baseUrl2 + qqq._id, qqq).then(function (response) {
            $scope.toDo[index] = response.data;
            console.log(response.data);
        })
    }
  //next
    .factory('CarFactory',[function(){
    return function (year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
        this.printInfro = function() {
            var carInfo = 
            'Year: ' + this.year + '\n' +
            'make: ' + this.make + '\n' +
            'model: ' + this.model + '\n' +
            'color: ' + this.color 
            console.log(carInfo);
        }
    }

    $scope.carInventory = [];
    $scope.addCar = function(year,make,model,color) {
        var car = new CarFactory(year,make,model,color)
        $scope.carInventory.push(car);
    }
        
    }])
    
}])
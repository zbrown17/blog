angular
    .module('RedditMod',[])
    .controller('RedditCtrl',['$scope','$http',function ($scope, $http){
        var baseUrl = "https://www.reddit.com/r/all/top.json?sort=new&limit=1000";
        $http.get(baseUrl).then(function (response){
            console.log(response.data.data.children);
            var data = response.data.data.children;
            $scope.first = data[0];
            $scope.rest = data.slice(1);
             
        })
    }])
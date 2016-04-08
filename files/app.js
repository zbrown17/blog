angular
	.module("app", [
        "ngRoute",
        "BlogMod",
		"GameMod",
		"HomeMod",
		"MovieMod",
		"ShowMod",
		"StuffMod"
])

.config(['$routeProvider', function ($routeProvider){
        $routeProvider
        
        .when ('/blog', {
        	templateUrl: 'view/blog.html',
        	controller: "BlogCtrl"
        })
        .when ('/games', {
            templateUrl: 'view/games.html',
            controller: 'GameCtrl'
        })
        .when ('/movies', {
        	templateUrl: 'view/movies.html',
        	controller: "MovieCtrl"
        })
        .when ('/shows', {
        	templateUrl: 'view/shows.html',
        	controller: "ShowCtrl"
        })
        .when ('/stuff', {
        	templateUrl: 'view/stuf.html',
        	controller: "StuffCtrl"
        })
        .when('/home', {
            templateUrl:'view/home.html',
            controller: "HomeCtrl"
        })
        .otherwise({
            redirectTo: '/home'
        })
}])
    
    .controller("MainCtrl", ["$scope", function ($scope){
        console.log('worked');
    }])


    .directive('template', function (){
        return {
            templateUrl: 'view/_template.html'
        };
    })




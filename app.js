angular
	.module("app", [
        "ngRoute",
        "ProjectMod",
		"GameMod",
		"HomeMod",
		"MovieMod",
		"ShowMod",
		"StuffMod",
        "RedditMod"
])

.config(['$routeProvider', function ($routeProvider){
        $routeProvider
        
        .when ('/projects', {
        	templateUrl: 'view/projects.html',
        	controller: "ProjectCtrl"
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
        .when('/reddit', {
            templateUrl: 'view/reddit.html',
            controller: 'RedditCtrl'
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




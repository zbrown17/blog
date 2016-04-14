angular
	.module("app", [
        "ngRoute",
        "ProjectMod",
		"GameMod",
		"HomeMod",
		"MovieMod",
		"ShowMod",
		"StuffMod",
        "RedditMod",
        "PostMod"
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
        .when('/post', {
            templateUrl: 'view/post.html',
            controller: "PostCtrl"
        })
        .when('/blog-post', {
            templateUrl: 'view/blog.html',
            controller: 'BlogCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])
    
    .controller("MainCtrl", ["$scope", function ($scope){
        console.log('worked');
    }])

    .controller("BlogCtrl", ['$scope', function ($scope){
        
    }])

    .directive('template', function (){
        return {
            templateUrl: 'view/_template.html'
        };
    })




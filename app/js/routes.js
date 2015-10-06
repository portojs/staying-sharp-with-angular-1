angular.module('NoteWrangler')
    .config(function($routeProvider){
        $routeProvider
            .when('/notes', {
                templateUrl: '/template/pages/notes/index.html'
            })
            .when('/users', {
                templateUrl: '/template/pages/users/index.html'
            })
            .when('/', {
                templateUrl: '/template/pages/notes/index.html'
            })
            .otherwise({redirectTo: '/'});
    });
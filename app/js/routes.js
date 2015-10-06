angular.module('NoteWrangler')
    .config(function($routeProvider){
        $routeProvider
            .when('/notes', {
                templateUrl: '/template/pages/notes/index.html',
                controller: 'NotesIndexController',
                controllerAs: 'indexController'
            })
            .when('/users', {
                templateUrl: '/template/pages/users/index.html'
            })
            .when('/', {
                templateUrl: '/template/pages/notes/index.html'
            })
            .otherwise({redirectTo: '/'});
    });
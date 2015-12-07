// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
angular.module('myTvApp', ['ionic', 'ngResource', 'ngCordova', 'myTvApp.controllers', 'myTvApp.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.movies', {
        url: '/movies',
        views: {
          'Movies': {
            templateUrl: 'templates/tab-movies.html',
            controller: 'moviesController',
            resolve: {
              splash: function(appInit) {
                return appInit.splash();
              }
            }
          }
        }
      })
      .state('tab.posts', {
        url: '/posts',
        views: {
          'Posts': {
            templateUrl: 'templates/tab-posts.html',
            controller: 'postsController'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/movies');

  });

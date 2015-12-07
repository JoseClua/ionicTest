angular.module('myTvApp.services', [])

  .factory('postsService', function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/posts/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  })

  .factory('appInit', function ($q, $cordovaSplashscreen, $ionicPlatform, $timeout) {
    return {
      splash: function() {

        var deferred = $q.defer();

        $ionicPlatform.ready(function(){
          $timeout(function(){
            $cordovaSplashscreen.hide();
            deferred.resolve();
          }, 2500);
        });

        return deferred.promise;

      }
    };
  });

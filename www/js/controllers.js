angular.module('myTvApp.controllers', [])

  .controller('moviesController', ['$scope', '$http', '$ionicPopup', '$timeout',
    function($scope, $http, $ionicPopup, $timeout){

    $scope.MovieIDs = ["tt1285016","tt0077869","tt0133093","tt0371746","tt0068646","tt0077838","tt1185834","tt0119177"];
    $scope.showErrorMessage = false;

    $scope.fetch = function() {
      var item = $scope.MovieIDs[Math.floor(Math.random()*$scope.MovieIDs.length)];
      $http.get("http://www.omdbapi.com/?i=" + item + "&plot=full")
        .success(function (response) {
          $scope.details = response;
        })
        .error(function(response) {
          $scope.showErrorMessage = true;
          $scope.showAlert();
        });
    };

    $scope.doRefresh = function() {
      $timeout(function () {
        $scope.fetch();
        $scope.$broadcast('scroll.refreshComplete');
      }, 1000)
    };

    $scope.fetch();

    // TODO: Criar tratamento de erros global
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Erro',
        template: 'Desculpe o Serviço está indisponível'
      });
      alertPopup.then(function(res) {
        console.log('erro confirmado');
      });
    };

  }])

  .controller('postsController', ['$scope', '$http', 'postsService', '$ionicPopup', '$timeout',
    function ($scope, $http, postsService, $ionicPopup, $timeout) {

      $scope.showErrorMessage = false;

      $scope.fetch = function() {
        postsService.query().$promise.then(function (data) {
          $scope.posts = postsService.query();
        }, function (error) {
          $scope.showErrorMessage = true;
          $scope.showAlert();
        });
      };

      $scope.doRefresh = function() {
        $timeout(function () {
          $scope.fetch();
          $scope.$broadcast('scroll.refreshComplete');
        }, 1000)
      };

      $scope.fetch();

      // TODO: Criar tratamento de erros global
      $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Erro',
          template: 'Desculpe o Serviço está indisponível'
        });
        alertPopup.then(function(res) {
          console.log('erro confirmado');
        });
      };
    }]);

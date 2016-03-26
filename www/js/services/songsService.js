angular.module('starter.services', [])

  .service("SongsService", ['$http', function($http){
    this.getAllSongs = function(){
      return $http.get('/songs/');
    };
    // this.getProduct = function(id){
    //   return $http.get('/product/'+id);
    // };
    // this.getIndiProduct = function(id){
    //   return $http.get('/product/product/' + id);
    // };
    // this.addProduct = function(product){
    //   return $http.post('/product/new', product);
    // };

  }
  ]);
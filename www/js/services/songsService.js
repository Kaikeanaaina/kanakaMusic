angular.module('starter.services', [])

  .service("SongsService", ['$http', function($http){
    var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    var domain;
    if(!isCordovaApp){
      domain = 'http://localhost:4000';
    }
    if(isCordovaApp){
      domain = '.';
    }

    this.getAllSongs = function(){
      return $http.get(domain + '/songs');
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
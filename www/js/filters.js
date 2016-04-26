// angular.module('myApp')
//   .filter('titleFilter', function(){
//     return function(collection, year){
//       return collection.filter(function(item){
//         return item.year < year;
//       });
//     };
//   });

angular.module('app.songFilter',[])
  .filter('titleFilter', function(){
    return function(collection, startingAlphabet){
      return collection.filter(function(song){
        var splitTitle = song.title.toUpperCase().split("");
        if(splitTitle[0]=== startingAlphabet){
          return song;
        }
      });
    };
  });
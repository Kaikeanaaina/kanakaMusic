angular.module('starter.services',[])

.factory('Songs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var songs = [{
    id: 0,
    name: 'Santeria',
    artist: 'Sublime',
    albumTitle: 'Sublime',
    album: 'img/ben.png'
  }, {
    id: 1,
    name: 'Chivalry Is Dead',
    artist: 'Trevor Wesley',
    albumTitle: 'Chivalry Is Dead - Single',
    album: 'img/max.png'
  }, {
    id: 2,
    name: 'Billionaire ft. Bruno Mars',
    artist: 'Travie McCoy',
    albumTitle: 'Lazarus',
    album: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Cocoa Butter Kisses ft. Vic Mensa and Twista',
    artist: 'Chance The Rapper',
    albumTitle: 'Acid Rap',
    album: 'img/perry.png'
  }, {
    id: 4,
    name: "Let's Get Lost ft. Devon Baldwin",
    artist: 'G-Eazy',
    albumTitle: 'These Things Happen',
    album: 'img/mike.png'
  }];

  return {
    all: function() {
      return songs;
    },
    remove: function(song) {
      songs.splice(songs.indexOf(song), 1);
    },
    get: function(songId) {
      for (var i = 0; i < songs.length; i++) {
        if (songs[i].id === parseInt(songId)) {
          return songs[i];
        }
      }
      return null;
    }
  };
})

.factory('Artists', function() {
  var artists = [{
    id: 0,
    name: 'Sublime',
    pic: 'img/perry.png'
  }, {
    id: 1,
    name: 'Trevor Wesley',
    pic: 'img/perry.png'
  }, {
    id: 2,
    name: 'Bruno Mars',
    pic: 'img/perry.png'
  }, {
    id: 3,
    name: 'Chance The Rapper',
    pic: 'img/perry.png'
  }, {
    id: 4,
    name: 'G-Eazy',
    pic: 'img/perry.png'
  }];

  return {
    all: function() {
      return artists;
    },
    get: function(artistId) {
      for(var i = 0; i < artists.length; i++) {
        if(artists[i].id === parseInt(artistId)) {
          return artists[i];
        }
      }
      return null;
    }
  };
});

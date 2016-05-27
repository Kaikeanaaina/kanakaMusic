// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','app.routes', 'app.Controllers', 'app.songServices', 'app.artistServices','app.albumServices', 'app.directives', 'app.gigController', 'app.recordLabelServices','app.settingController','app.bandMemberController','app.Filters'])

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


  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'kanakaMusicCtrl'
      }
    },
    abstract: true
  })

  .state('menu.home.hawaiianSong', {
    url: '/hawaiianSongs',
    views: {
      'tabs-view': {
        templateUrl: 'templates/hawaiianSonglist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.home.contemporarySong', {
    url: '/contemporarySongs',
    views: {
      'tabs-view': {
        templateUrl: 'templates/contemporarySonglist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.home.hawaiianArtist', {
    url: '/hawaiianArtists',
    views: {
      'tabs-view': {
        templateUrl: 'templates/hawaiianArtistlist.html',
        controller: 'kanakaMusicCtrl'
      }
    }
  })

  .state('menu.home.contemporaryArtist', {
    url: '/contemporaryArtists',
    views: {
      'tabs-view': {
        templateUrl: 'templates/contemporaryArtistlist.html',
        controller: 'kanakaMusicCtrl'
      }
    }
  })

  .state('menu.addNewSong', {
    url: '/addNewSong',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewSong.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.editSong', {
    url: '/song/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editSong.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.songContent', {
    url: '/song/content/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/songContent.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.addNewArtist', {
    url: '/addNewArtist',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewArtist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.artistContent', {
    url: '/artist/content/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artistContent.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.editArtist', {
    url: '/artist/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editArtist.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.bandMembers', {
    url: '/artist/:id/members',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bandMembers.html',
        controller: 'bandMemberCtrl'
      }
    }
  })

  .state('menu.gigs', {
    url: '/gigs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigs.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('gigsCalendar', {
    url: '/gigs/calendar',
    templateUrl: 'templates/gigsCalendar.html',
    controller: 'gigsCtrl'
  })


  .state('menu.albums', {
    url: '/albums',
    views: {
      'side-menu21': {
        templateUrl: 'templates/albumList.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })


  .state('menu.addNewAlbum', {
    url: '/addNewAlbum',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewAlbum.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.editAlbum', {
    url: '/album/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editAlbum.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.albumPage', {
    url: '/album/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/albumPage.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.recordLabels', {
    url: '/recordLabels',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recordLabelList.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.addNewRecordLabel', {
    url: '/addNewRecordLabel',
    views: {
      'side-menu21' : {
        templateUrl: 'templates/addNewRecordLabel.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.editRecordLabel', {
    url: '/recordLabel/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editRecordLabel.html',
        controller: 'kanakaMusicCtrl'      }
    }
  })

  .state('menu.gigDetails', {
    url: '/gig/details/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigDetails.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('menu.addNewGig', {
    url: '/addNewGig',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewGig.html',
        controller: 'gigCtrl'
      }
    }
  })

  .state('dateOfTheGigs', {
    url: '/gigs/day/:id',
    templateUrl: 'templates/dateOfTheGigs.html',
    controller: 'gigCtrl'
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingCtrl'
      }
    }
  })


  .state('menu.privacyPolicy', {
    url: '/privacyPolicy',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('menu.serviceTerms', {
    url: '/serviceTerms',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviceTerms.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('menu.frequentlyAskedQuestions', {
    url: '/frequentlyAskedQuestions',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequentlyAskedQuestions.html',
        controller: 'settingCtrl'
      }
    }
  })


  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'settingCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/side-menu/home/hawaiianSongs');



});
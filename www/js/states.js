angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.gigs', {
    url: '/gigs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigs.html',
        controller: 'gigsCtrl'
      }
    }
  })

  .state('gigsCalendar', {
    url: '/gigs/calendar',
    templateUrl: 'templates/gigsCalendar.html',
    controller: 'gigsCalendarCtrl'
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.addNewSong', {
    url: '/add NewSong',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewSong.html',
        controller: 'addNewSongCtrl'
      }
    }
  })

  .state('menu.editSong', {
    url: '/song/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editSong.html',
        controller: 'editSongCtrl'
      }
    }
  })

  .state('menu.addNewArtist', {
    url: '/addNewArtist',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewArtist.html',
        controller: 'addNewArtistCtrl'
      }
    }
  })

  .state('menu.editArtist', {
    url: '/artist/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editArtist.html',
        controller: 'editArtistCtrl'
      }
    }
  })

  .state('addRecordLabel', {
    url: '/addRecordLabel',
    templateUrl: 'templates/addRecordLabel.html',
    controller: 'addRecordLabelCtrl'
  })

  .state('menu.editRecordLabel', {
    url: '/recordLabels/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editRecordLabel.html',
        controller: 'editRecordLabelCtrl'
      }
    }
  })

  .state('menu.addNewAlbum', {
    url: '/addNewAlbum',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewAlbum.html',
        controller: 'addNewAlbumCtrl'
      }
    }
  })

  .state('menu.editAlbum', {
    url: '/album/edit/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editAlbum.html',
        controller: 'editAlbumCtrl'
      }
    }
  })

  .state('menu.songContent', {
    url: '/song/content/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/songContent.html',
        controller: 'songContentCtrl'
      }
    }
  })

  .state('menu.gigDetails', {
    url: '/gig/details/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gigDetails.html',
        controller: 'gigDetailsCtrl'
      }
    }
  })

  .state('menu.addNewGig', {
    url: '/addNewGig',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewGig.html',
        controller: 'addNewGigCtrl'
      }
    }
  })

  .state('menu.artistInformation', {
    url: '/artist/info/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artistInformation.html',
        controller: 'artistInformationCtrl'
      }
    }
  })

  .state('menu.artistContext', {
    url: '/artist/context/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artistContext.html',
        controller: 'artistContextCtrl'
      }
    }
  })

  .state('menu.albumPage', {
    url: '/album/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/albumPage.html',
        controller: 'albumPageCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.recordLabels', {
    url: '/recordLabels',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recordLabels.html',
        controller: 'recordLabelsCtrl'
      }
    }
  })

  .state('menu.privacyPolicy', {
    url: '/privacyPolicy',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'privacyPolicyCtrl'
      }
    }
  })

  .state('menu.serviceTerms', {
    url: '/serviceTerms',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviceTerms.html',
        controller: 'serviceTermsCtrl'
      }
    }
  })

  .state('dateOfTheGigs', {
    url: '/gigs/day/:id',
    templateUrl: 'templates/dateOfTheGigs.html',
    controller: 'dateOfTheGigsCtrl'
  })

  .state('menu.bandMembers', {
    url: '/artist/:id/members',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bandMembers.html',
        controller: 'bandMembersCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu/home')

  

});
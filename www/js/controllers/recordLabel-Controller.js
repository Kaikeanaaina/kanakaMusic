angular.module('app.recordLabelController', [])


.controller('recordLabelCtrl', function($scope, $state, $location, recordLabelService) {

  $scope.RecordLabel = [];
  $scope.NumberRecordLabel = [];
  $scope.ARecordLabel = [];
  $scope.BRecordLabel = [];
  $scope.CRecordLabel = [];
  $scope.DRecordLabel = [];
  $scope.ERecordLabel = [];
  $scope.FRecordLabel = [];
  $scope.GRecordLabel = [];
  $scope.HRecordLabel = [];
  $scope.IRecordLabel = [];
  $scope.JRecordLabel = [];
  $scope.KRecordLabel = [];
  $scope.LRecordLabel = [];
  $scope.MRecordLabel = [];
  $scope.NRecordLabel = [];
  $scope.ORecordLabel = [];
  $scope.PRecordLabel = [];
  $scope.QRecordLabel = [];
  $scope.RRecordLabel = [];
  $scope.SRecordLabel = [];
  $scope.TRecordLabel = [];
  $scope.URecordLabel = [];
  $scope.VRecordLabel = [];
  $scope.WRecordLabel = [];
  $scope.XRecordLabel = [];
  $scope.YRecordLabel = [];
  $scope.ZRecordLabel = [];

 $scope.getAllRecordLabels = function(){
    recordLabelService.getAllRecordLabels()
    .success(function(data){

      for(var i = 0;i<data.length;i++){
        var splitTitle = data[i].title.toUpperCase().split("");
        if(splitTitle[0]==="A"){
          $scope.ARecordLabel.push(data[i]);
        } else if(splitTitle[0]==="B"){
          $scope.BRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="C"){
          $scope.CRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="D"){
          $scope.DRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="E"){
          $scope.ERecordLabel.push(data[i]);
        } else if(splitTitle[0]==="F"){
          $scope.FRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="G"){
          $scope.GRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="H"){
          $scope.HRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="I"){
          $scope.IRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="J"){
          $scope.JRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="K"){
          $scope.KRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="L"){
          $scope.MRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="M"){
          $scope.MRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="N"){
          $scope.NRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="O"){
          $scope.ORecordLabel.push(data[i]);
        } else if(splitTitle[0]==="P"){
          $scope.PRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="Q"){
          $scope.QRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="R"){
          $scope.RRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="S"){
          $scope.SRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="T"){
          $scope.TRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="U"){
          $scope.URecordLabel.push(data[i]);
        } else if(splitTitle[0]==="V"){
          $scope.VRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="W"){
          $scope.WRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="X"){
          $scope.XRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="Y"){
          $scope.YRecordLabel.push(data[i]);
        } else if(splitTitle[0]==="Z"){
          $scope.ZRecordLabel.push(data[i]);
        } else {
          $scope.NumberRecordLabel.push(data[i]);
        }
      }
    });
  };

  $scope.addRecordLabel = function(recordLabel){
    console.log('111111111', recordLabel);

    if(!recordLabel.name){
      console.log('there need to be a recordLabel name property');
      return $location.url('/side-menu/addNewRecordLabel');
    }

    // if(!recordLabel.ArtistId){
    //   console.log('there need to be a recordLabel artist property');
    //   return $location.url('/side-menu/addNewrecordLabel');
    // }

    if(recordLabel.name.length===0 || recordLabel=== null || recordLabel === undefined){
      console.log('there needs to be value in name');
      return $location.url('/side-menu/addNewRecordLabel');
    }

    recordLabelService.addRecordLabel(recordLabel)
    .success(function(data){
      $scope.getAllRecordLabels();

      //*********ATTENTION*************
            //*********ATTENTION*************
                  //*********ATTENTION*************
                        //*********ATTENTION*************
                              //*********ATTENTION*************
      // can't figure out if i like how it doesn't refresh
      // if it doesn't refrest after adding a song
        //it might be good so the home page doesn't mess up if you lose connection
        // then again you should add a song without internet connection
      //if it does refresh after adding a song
        //it will be up to date realtime
      return $state.go('menu.recordLabels');
    });
  };

  $scope.getRecordLabel = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,17);
    var finalLocationPath = splitLocationPath.join("");
    recordLabelService.getrecordLabel(encodeURI(finalLocationPath))
    .success(function(data){
      console.log('getting recordLabel', data);
     $scope.RecordLabel = data;
    });
  };

  $scope.getRecordLabelToEdit = function(){
    var locationPath = $location.$$path;
    var splitLocationPath = locationPath.split("");
    splitLocationPath.splice(0,22);
    var finalLocationPath = splitLocationPath.join("");
    recordLabelService.getrecordLabel(finalLocationPath)
    .success(function(data){
      console.log("11111111 get recordLabel to edit", data);
      $scope.RecordLabel = data;
    });
  };

$scope.editrecordLabel = function(recordLabel){
    if(recordLabel===undefined || recordLabel === null){
      return $location.url('side-menu/recordLabel/'+ $scope.recordLabel.id);
    }

    if(recordLabel.hasOwnProperty("title")){

      if(!recordLabel.hasOwnProperty("id")){
        recordLabel.id = $scope.recordLabel.id;
      }
      if(!recordLabel.hasOwnProperty("RecordLabelId") || recordLabel.RecordLabelId.length===0){
        recordLabel.RecordLabelId = $scope.recordLabel.RecordLabelId;
      }
      if(!recordLabel.hasOwnProperty("PublisherId") || recordLabel.PublisherId.length===0){
        recordLabel.PublisherId = $scope.recordLabel.PublisherId;
      }
      if(!recordLabel.hasOwnProperty("description") || recordLabel.description.length===0){
        recordLabel.description = $scope.recordLabel.description;
      }

      recordLabelService.editrecordLabel($scope.recordLabel.id, recordLabel)
      .success(function(data){
        $scope.getrecordLabelToEdit();
        $location.url('side-menu/recordLabel/'+ $scope.recordLabel.id);
      });
    } else {

      if(!recordLabel.hasOwnProperty("id")){
        recordLabel.id = $scope.recordLabel.id;
      }
      if(!recordLabel.hasOwnProperty("title")){
        recordLabel.title = $scope.recordLabel.title;
      }
      if(!recordLabel.hasOwnProperty("RecordLabelId") || recordLabel.RecordLabelId.length===0){
        recordLabel.RecordLabelId = $scope.recordLabel.RecordLabelId;
      }
      if(!recordLabel.hasOwnProperty("PublisherId") || recordLabel.PublisherId.length===0){
        recordLabel.PublisherId = $scope.recordLabel.PublisherId;
      }
      if(!recordLabel.hasOwnProperty("description") || recordLabel.description.length===0){
        recordLabel.description = $scope.recordLabel.description;
      }


      recordLabelService.editrecordLabel($scope.recordLabel.id, recordLabel)
      .success(function(data){
        $scope.getrecordLabelToEdit();
        $location.url('side-menu/recordLabel/'+ $scope.recordLabel.id);
      });
    }

  };

  $scope.deleterecordLabel = function(){
    console.log('delete this recordLabel');
    recordLabelService.deleterecordLabel($scope.recordLabel)
    .success(function(data){
      $scope.getAllrecordLabels();
      return $state.go('menu.recordLabels');

    });
  };


});
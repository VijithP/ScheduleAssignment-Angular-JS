var app = angular.module('myApp', []);


app.controller('shiftCtrl', function($scope, $http) {

  
    $scope.shiftList = [];

    $scope.load = function () {
        debugger;
        shiftListTemp = [];
        shiftListTemp.push({"id":'1',"name":"6AM to 3PM - Morning Shift","from":"6AM","to":"3PM",  "description":"6AM to 3PM - Morning Shift","color":"Color1"});
        shiftListTemp.push({"id":'2',"name":"7AM to 4PM - Morning Shift","from":"7AM","to":"4PM","description":"7AM to 4PM - Morning Shift","color":"Color2"});
        shiftListTemp.push({"id":'3',"name":"2PM to 11PM - Afternoon Shift","from":"2AM","to":"11PM","description":"2PM to 11PM - Afternoon Shift","color":"Color3"});
        shiftListTemp.push({"id":'4',"name":"6PM to 3AM - Night Shift1","from":"6PM","to":"3AM","description":"6PM to 3AM - Night Shift 1","color":"Color4"});
        shiftListTemp.push({"id":'5',"name":"10PM to 7AM - Night Shift2","from":"10PM","to":"7AM","description":"10PM to 7AM - Night Shift2","color":"Color5"});
    
        $scope.shiftList = shiftListTemp;
       // $scope.$apply();
   
    }

    $scope.load();

    $scope.shift = {
        id: '',
        name: '',
        from:'',
        to:'',
        description: '',
        color: ''
    }

    $scope.clear = function () {
        $scope.shift.id = '';
        $scope.shift.name = '';
        $scope.shift.description = '';
        $scope.shift.color = '';
    }

   $scope.save = function () {
       
    };



    // $scope.load = function () {
    //     $.ajax({
    //         type: 'GET',
    //         contentType: 'application/json; charset=utf-8',
    //         url: '/Home/getList',
    //         success: function (data) {
    //             $scope.emplist = data;
    //             $scope.$apply();
    //             console.log($scope.emplist);
    //         }
    //     });
    // }
   
    // $scope.save = function () {
    //     $.ajax({
    //         type: 'POST',
    //         contentType: 'application/json; charset=utf-8',
    //         data: JSON.stringify($scope.emp),
    //         url: '/Home/save',
    //         success: function (data, status) {
    //             $scope.clear();
    //         },
    //         error: function (status) { }
    //     });
    // };
  
    
   
  
  
  });
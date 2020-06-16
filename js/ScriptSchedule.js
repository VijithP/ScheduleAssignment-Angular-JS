var app = angular.module('myApp', []);

var SelectedShift="bgColorShift1";
var monthDaysLoading=[];
var employeeDetails=
 [
     {"EmployeeID":"0101","Name":"John;Mathew","Email":"jmathew@galaxe.com","Manager":"Ford;Francis","DateValue":null,"ShiftID":null},    
     {"EmployeeID":"0102","Name":"Micheal;Nolan","Email":"nolan@galaxe.com","Manager":"Ford;Francis","DateValue":null,"ShiftID":null},
     {"EmployeeID":"0103","Name":"Cena;John","Email":"john@galaxe.com","Manager":"Ford;Francis","DateValue":null,"ShiftID":null},
     {"EmployeeID":"0104","Name":"David;James","Email":"james@galaxe.com","Manager":"Ford;Francis","DateValue":null,"ShiftID":null},
     {"EmployeeID":"0105","Name":"Martin;Scourse","Email":"scourse@galaxe.com","Manager":"Ford;Francis","DateValue":null,"ShiftID":null},
     {"EmployeeID":"0106","Name":"Stephan;Smith","Email":"smith@galaxe.com","Manager":"Ford;Francis","DateValue":null,"ShiftID":null},
     {"EmployeeID":"0107","Name":"Jackson;Victor","Email":"victor@galaxe.com","Manager":"Ford;Francis","DateValue":null,"ShiftID":null},
        
   
]


var EmployeeShiftDetails=[];




app.controller('shiftAssignCtrl', function($scope, $http) {


  

  $scope.selectedOption="";
 

  var getYear=new Date().getFullYear()
  var getMonth=new Date().getMonth();
  

  $scope.SelectMonth=new Date().getMonth()+'-'+getYear;

  $scope.LoadShiftScreen = function (monthVal,yearVal) 
  {
    try{
      
      debugger;
      var getEndDate=lastday(yearVal,monthVal);
      $scope.DayOfMonths=getEndDate+1;
      $scope.DateDetails=monthNames[monthVal] + ' - ' +yearVal;

      GeneratingMonthDays(getEndDate,monthVal,yearVal);  
      FnEmployeeShiftDetails();
  
      $scope.employeeDetails=employeeDetails;
      $scope.monthDaysLoading=monthDaysLoading;
      $scope.EmployeeShiftDetails=EmployeeShiftDetails;

    }
    catch(e)
    {
      console.log('Error on screen');
    }
  }

  $scope.LoadShiftScreen(getMonth,getYear);



  $scope.SelectMonthSchedule=function()
  {
    try{     

      
      var details=$scope.SelectMonth.split('-');
      var getYear=details[1]
      var getMonth=details[0]

      $scope.LoadShiftScreen(getMonth,getYear);

    }
    catch(e)
    {
      console.error('error on screen.');
    }
  }

  $scope.ChangeEmployee = function () { 
    //alert($scope.selectedOption);

  }


  
function FnEmployeeShiftDetails()
{
    try{

      EmployeeShiftDetails=[];
        employeeDetails.forEach(element => {
           // console.log(element)

          //  monthDays.forEach(monthElement=>{
            monthDaysLoading.forEach(monthElement=>{

               // console.log(monthElement)

                if(element.DateValue !=monthElement.dateValue)
                {
                    EmployeeShiftDetails.push({"EmployeeID":element.EmployeeID,"Name":element.Name,"DateNo":monthElement,"ShiftID":null});
                }
                else{
                    EmployeeShiftDetails.push({"EmployeeID":element.EmployeeID,"Name":element.Name,"DateNo":monthElement,"ShiftID":null});

                }
               

            })
            
        });

    }
    catch(e){
        throw e;
    }
}


  



});

$(function () {

    var isMouseDown = false;
    $("#TblIdShift td")
      .mousedown(function () {
        debugger;
        isMouseDown = true;
        // $(this).toggleClass("highlighted");
        $(this).toggleClass(SelectedShift);
        return false; // prevent text selection
      })
      .mouseover(function () {
        if (isMouseDown) {
         // $(this).toggleClass("highlighted");
         $(this).toggleClass(SelectedShift);
          // $(this).removeClass().addClass(SelectedShift)
        }
      });
    
    $(document)
      .mouseup(function () {
        isMouseDown = false;
      });
    

    $("#datepicker").datepicker( {
      format: "mm-yyyy",
      viewMode: "months", 
      minViewMode: "months"
  })
    

  });


  $(".clsShiftItem").on('click',function()
  {
    debugger;
    var selectedShift=this.text;
    
    $("#DivIdSelectedShift").text(selectedShift);  

    var selectClassName=this.attributes["data-shiftId"].value;
    SelectedShift='bgColor'+selectClassName
    $("#DivIdSelectedShift").removeClass().addClass(SelectedShift);

    
  })

function SelectMonth()
{
  try
  {

    debugger;
    var dateValue=$("#datepicker").val();
    var getYear=new Date(dateValue).getFullYear()
    var getMonth=new Date(dateValue).getMonth();
    var getEndDate=lastday(getYear,getMonth);

    GeneratingMonthDays(getEndDate,getMonth,getYear);  
    FnEmployeeShiftDetails();

    LoadShiftDetailsScreen();
    
   
  }
  catch(e)
  {
    throw e;
  }
}

var lastday = function(y,m){
  
 return  new Date(y, m +1, 0).getDate();

}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function GeneratingMonthDays(endDate,month,year)
{
  try{

    monthDaysLoading=[];
    for(dayNo=1;dayNo<=endDate;dayNo++)
    {
     
      dateValue=new Date(year,month,dayNo);
      var n = dateValue.getDay()
      monthDaysLoading.push({"DateValue":dateValue,"DateNo":dayNo,"Day":n});
         
    }
    console.log(monthDaysLoading);

  }
  catch(e)
  {
    console.log('Error on Generating Month details');
  }
}





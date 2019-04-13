var config = {
    apiKey: "AIzaSyCVGbHah9ZOba-AuUk1KZxnlLmvjBjJtgk",
    authDomain: "forclass-4f95c.firebaseapp.com",
    databaseURL: "https://forclass-4f95c.firebaseio.com",
    projectId: "forclass-4f95c",
    storageBucket: "forclass-4f95c.appspot.com",
    messagingSenderId: "895419474223"
  };
  
  firebase.initializeApp(config);
  
  // Create a variable to reference the database.
  var database = firebase.database();


  var eName = "";
  var eRole = "";
  var eStartDate = "";
  var eMonthsWorked = 0;
  var eMonthlyRate = 0;
  var eTotalBilled = 0;

  function addRow (){
    return `
    <tr>
    <th scope="row">${eName}</th>
    <td>${eRole}</td>
    <td>${eStartDate}</td>
    <td>${eMonthsWorked}</td>
    <td>${eMonthlyRate}</td>
    <td>${eTotalBilled}</td>
    </tr>
    `  

  }
  var date="09/11/1995";
 
  function monthGetter( date) {
    var datearr = date.split('/');
 console.log(datearr);
  var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0');
 var yyyy = today.getFullYear();
 parseInt(datearr[0]);
 parseInt(datearr[2]);
 parseInt(mm);
 parseInt(yyyy);
 var monthDifference=(yyyy-datearr[2])*12+ ( mm - datearr[0]);
 console.log(monthDifference);
 }
 



database.ref().set({

    Employee: eName,
    Role: eRole,
    Date: eStartDate,
    MonthsWorked: eMonthsWorked,
    MonthlyRate: eMonthlyRate,
    TotalBilled: eTotalBilled
})


$(document).on("click", 'button', function () {
    event.preventDefault();

    eName = $("#name-input").val().trim();
    eRole = $("#destination-input").val().trim();
    eStartDate = $("#ftt-input").val().trim();
    eMonthlyRate = $("#frequency-input").val();

  


    database.ref().push({
        Employee: eName,
        Role: eRole,
        Date: eStartDate,
        MonthsWorked: eMonthsWorked,
        MonthlyRate: eMonthlyRate,
        TotalBilled: eTotalBilled,


});


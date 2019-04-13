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

database.ref().set({

    Employee: eName,
    Role: eRole,
    Date: eStartDate,
    MonthsWorked: eMonthsWorked,
    MonthlyRate: eMonthlyRate,
    TotalBilled: eTotalBilled
})


$("#submitBtn").on("click", function () {
    event.preventDefault();

    eName = $("#name-input").val().trim();
    eRole = $("#destination-input").val().trim();
    eStartDate = $("#ftt-input").val().trim();
    eMonthlyRate = $("#frequency-input").val();

    console.log(eName);


    database.ref().set({
        Employee: eName,
        Role: eRole,
        Date: eStartDate,
        MonthsWorked: eMonthsWorked,
        MonthlyRate: eMonthlyRate,
        TotalBilled: eTotalBilled
    })
})



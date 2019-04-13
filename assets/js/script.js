

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
console.log(yyyy);
console.log(datearr[2])
console.log(mm)
console.log(datearr[0]);
console.log(yyyy-datearr[2]*12);
console.log(mm -datearr[0]);
 var monthDifference=(yyyy-datearr[2]*12)+ ( mm - datearr[0]);
 console.log(monthDifference);
}
monthGetter(date);
const StudentId = 1234;
let StudentName = "Satrajeet";
var StudentEmail = "2405964@kiit.ac.in";
StudentCity = "Bhubhabeswar"
let StudentPassword = 12345;
let StudentAge;

// StudentId = 2 not allowed after a value is being declared in const

StudentName = "Satty"
StudentPassword = 12345678;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(StudentId);

console.table([StudentId, StudentName, StudentEmail, StudentPassword, StudentCity, StudentAge])
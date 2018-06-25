function studentreport() {
var message = '';
var report = '';
var students = '';
var studentName = prompt("Please type a student name or type 'new' to add a new student:");
//var userpassword = prompt('What is the password?');
var password = "password";
var report = '';
var student = studentName.length;

function findStudent() {
  for (var i = 0; i < studentName.length; i += 1) {
  student = students[i];
    if (student === studentName) {
      var message = getStudentReport(studentName);
      alert(message);
    } else if (studentName === "new") {
      newStudent();
    }
  }
}
  function getStudentReport( studentName ) {
        var report = '<h2>Student: ' + studentName.name + '</h2>';
        report += '<p>Track: ' + studentName.track + '</p>';
        report += '<p>Points: ' + studentName.points + '</p>';
        report += '<p>Achievements: ' + studentName.achievements + '</p>';
        alert (report);
      }
function newStudent (name, track, points, achievements) {
  let name = prompt("What is the new student's name?");
  let track = prompt("What is the new student's track?");
  let points = prompt("What is the new student's total points?");
  let achievements = prompt("What is the student's achievement level?");

//  name.push(students.name);
}
}


/*function print(report) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
  }
*/


      //} else {
      //  alert('That is not a valid student name.');

/*function passGate (userpassword, password) {
//  while (userpassword != password) {
    if ( userpassword === password ) {
    getStudentReport();
    } else {
    document.write('That is not the correct password');
    }
  }
}
}
//}
//if (studentName === "new") {


//while (studentName === null || studentName.toLowerCase() === 'quit') {
  //break;
//  } else {
//    passGate();
//  }
*/

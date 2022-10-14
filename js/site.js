function chkemtpy(){
  var firstName = document.forms["registrationInput"]["firstName"].value
  var lastName = document.forms["registrationInput"]["lastName"].value
  var email = document.forms["registrationInput"]["email"].value
  var bungieID = document.forms["registrationInput"]["bungieID"].value
  var check = document.forms["check"]["checkBox"].value
  if ((!firstName) || (!lastName) || (!email) || (!bungieID) ) {
    alert("Error: Please fill all fields to continue.");
    return false;
  } 
  if (!check){
    alert("Error: Please check all boxes to continue.")
  }
  else{
    alert("You are all signed up! We look forward to meeting you!")
  }
}
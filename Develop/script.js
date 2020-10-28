// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var passSpecChar;
var passLowChar;
var passUpChar;
var passNumChar;
var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "?", "<", ">", "~"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wantPass = confirm("would you like to generate a random password?");
if (wantPass === true) { 
}

var passLength= prompt("How many characters would you like in your password?");
  for (passLength === false; passLength < 8 || passLength > 128; passLength++); {
  alert ("Need between 8 - 128 characters");
  passLength = prompt("How many characters would you like inyour password?");
  }

  passSpecChar = confirm("Click OK to confirm including specialized chatacters");
  passNumChar = confirm("Click OK to confirm including number chatacters");
  passLowChar = confirm("Click OK to confirm including lowercase chatacters");
  passUpChar = confirm("Click OK to confirm including uppercase chatacters");

  var Char = [passSpecChar, passLowChar, passUpChar, passNumChar]
  for (Char === false; !passSpecChar && !passLowChar && !passUpChar && !passNumChar; Char++){
    alert("At least one type of characteristics should be choosen")
    passSpecChar = confirm("Click OK to confirm including specialized chatacters");
    passNumChar = confirm("Click OK to confirm including number chatacters");
    passLowChar = confirm("Click OK to confirm including lowercase chatacters");
    passUpChar = confirm("Click OK to confirm including uppercase chatacters");
  }

  for (var i = 0; i < passLength.length; i++) {
    var pass = Math.floor(Math.random() * passLength.length)
  }
 // Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
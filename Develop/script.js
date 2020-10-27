//Variables
var passChar
var passSymbolChar
var passLowerChar
var passUpperChar
var passNumberChar

//Password possible characters
var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "?", "<", ">", "~"];
var numberChar= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChar= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var finalPassword = " ";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Need to get the password between 8 and 128 characters
var passChar = prompt("How many characters would you like your password to contain");

//testing prompt
// alert (" code is " + passChar)

if (passChar < 8 || passChar > 128) {
  alert ("Needs between 8 - 128 characters");
} else {

  passSymbolChar = confirm("Click OK to confirm including specialized chatacters");
  passLowerChar = confirm("Click OK to confirm including lowercase chatacters");
  passUpperChar = confirm("Click OK to confirm including uppercase chatacters");
  passNumberChar = confirm("Click OK to confirm including number chatacters");
  } 

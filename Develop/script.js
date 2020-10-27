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

  var passChar = prompt("How many characters would you like your password to contain");
  var passSymbolChar = confirm("Click OK to confirm including specialized chatacters");
  var passLowerChar = confirm("Click OK to confirm including lowercase chatacters");
  var passUpperChar = confirm("Click OK to confirm including uppercase chatacters");
  var passNumnerChar= confirm("Click OK to confirm including number chatacters");

//Password possible characters
var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "?", "<", ">", "~"];
var numberChar= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChar= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var finalPassword = "";

//Need to get the password between 8 and 128 characters
  var passChar = prompt("How many characters would you like your password to contain");

  if (passChar < 8) {
    alert ("Needs between 8 - 128 characters");
  } 
  if (passChar > 128) {
    alert ("Needs between 8 - 128 characters");
  }
// // concat array combines all 3 arrays
// var allChar = symbolChar.concat (numberChar, lowerChar, upperChar);
// console.log(allChar);

function randomChar(allChar) {

var allChar = symbolChar.concat (numberChar, lowerChar, upperChar);
  for (var i = 0; i < allchar.length; i++) {
    var i = Math.floor(Math.random() * (i + 1));
    var temp = allChar[i]
    allChar[i] = allChar [j]
    allChar [j] + temp;
  }
}
console.log(allChar);
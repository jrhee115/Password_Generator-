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


var passCharacter = prompt("How many characters would you like your password to contain");
var passSpecialCharacter = confirm("CLick OK to confirm including specialized chatacters");
var passLowerCaseCharacter = confirm("CLick OK to confirm including lowercase chatacters");
var passUpperCaseCharacter = confirm("CLick OK to confirm including uppercase chatacters");
var passNumbericCharacter = confirm("CLick OK to confirm including numberic chatacters");
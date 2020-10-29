//code characters
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "?", "<", ">", "~"];
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var confSpecChar;
var confNumChar;
var confUpChar;
var confLowChar;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

var wantPass = confirm("Would you like to generate a random password?")
if (wantPass === true) {

  // Password Needs 8 - 128 characters
  var passLen = prompt("How many characters would you like your password to be?")
  for (passLen === false; passLen < 8 || passLen > 128; passLen++) {
    alert("Password needs to be between 8 - 128 characters.");
    var passLen = prompt("How many characters would you like your password to be?");
  }
}
confSpecChar = confirm("Click OK to include a specialized chatacters");
confNumChar = confirm("Click OK to include a number chatacters");
confLowChar = confirm("Click OK to include a lowercase chatacters");
confUpChar = confirm("Click OK to include a uppercase chatacters");
for (allChar === false; !confSpecChar && !confNumChar && !confLowChar && !confUpChar; allChar++) {
  alert("Please choose at least one type of character");
  var allChar = [confSpecChar, confNumChar, confLowChar, confUpChar];
  confSpecChar = confirm("Click OK to include a specialized chatacters");
  confNumChar = confirm("Click OK to include a number chatacters");
  confLowChar = confirm("Click OK to include a lowercase chatacters");
  confUpChar = confirm("Click OK to include a uppercase chatacters");
  }
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value =  passwords; 

  if (lower === true && number === true && symbol === true && upper === true) {
    var charOpt = allChar;
}

if (!confSpecChar && !confNumChar && !confUpChar && !confLowChar) {
  charcOpt = alert("You must choose a criteria!");

}
// First if statement that uses user input prompts to determine choices
// 4 positive options
else if (confSpecChar && confNumChar && confUpChar && confLowChar) {

  charOpt = specChar.concat(numChar, lowChar, upChar);
}
// 3 positive options
else if (confSpecChar && confNumChar && confUpChar) {
charcOpt = specChar.concat(numChar, upChar);
}
else if (confSpecChar && confNumChar && confLowChar) {
charcOpt = specChar.concat(numChar, lowChar);
}
else if (confSpecChar && confLowChar && confUpChar) {
charcOpt = specChar.concat(lowChar, upChar);
}
else if (confNumChar && confLowChar && confUpChar) {
charcOpt = numChar.concat(lowChar, upChar);
}
// 2 positive options 
else if (confSpecChar && confNumChar) {
charcOpt = specChar.concat(numChar);

} else if (confSpecChar && confLowChar) {
charcOpt = specChar.concat(lowChar);

} else if (confSpecChar && confUpChar) {
charcOpt = specChar.concat(upChar);
}
else if (confLowChar && confNumChar) {
charcOpt = lowChar.concat(numChar);

} else if (confLowChar && confUpChar) {
charcOpt = lowChar.concat(upChar);

} else if (confNumChar && confUpChar) {
charcOpt = numChar.concat(upChar);
}
// 1 positive option
else if (confSpecChar) {
charcOpt = specChar;
}
else if (confNumChar) {
charcOpt = numChar;
}
else if (confLowChar) {
charcOpt = lowChar;
}
else if (confUpChar) {
charOpt = upChar;
};
}


  //testing prompt
  // alert(" code is " + inputPass);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
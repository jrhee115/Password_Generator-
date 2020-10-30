//code characters
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "?", "<", ">", "~"];
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allChar = [confSpecChar, confNumChar, confLowChar, confUpChar]
var confSpecChar;
var confNumChar;
var confUpChar;
var confLowChar;
var randomPass =[];

var charcOpt = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomChar(charArr) {
  let index = Math.floor(Math.random()*charArr.length);
  // console.log(charArr[index]);
  return charArr[index];
}



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
  var passLen2 = Number(passLen)
}

for (allChar === false; !confSpecChar && !confNumChar && !confLowChar && !confUpChar; allChar++) {
  alert("Please choose at least one type of character");
  allChar = [confSpecChar, confNumChar, confLowChar, confUpChar];
  confSpecChar = confirm("Click OK to include a specialized chatacters");
  confNumChar = confirm("Click OK to include a number chatacters");
  confLowChar = confirm("Click OK to include a lowercase chatacters");
  confUpChar = confirm("Click OK to include a uppercase chatacters");
  }
  //refactored my code, instead of writing out all the if statement I was able to use a while loop.
  var passwordText = document.querySelector("#password");
  var i = 1
while (i < passLen2) {
  console.log(i);
  if (confSpecChar && charcOpt.length < passLen2){
    charcOpt += getRandomChar(specChar) 
    i++;
  }
  if (confNumChar && charcOpt.length < passLen2){
    charcOpt += getRandomChar(numChar)
    i++;
  }
  if (confUpChar && charcOpt.length < passLen2){
    charcOpt += getRandomChar(upChar)
    i++;
  }
  if (confLowChar && charcOpt.length < passLen2){
    charcOpt += getRandomChar(lowChar)
    i++;
  }
}
console.log(charcOpt);
  passwordText.value =  charcOpt; 

//   if (confSpecChar === false && confNumChar === false && confUpChar === false && confLowChar === false) {
//     charcOpt = alert("You must choose a criteria!");
// }
// // 4 positive options
// else if (confSpecChar && confNumChar && confUpChar && confLowChar) {

//   // charcOpt = specChar.concat(numChar, lowChar, upChar);
//   charcOpt = getRandomChar(specChar) + getRandomChar(numChar) + getRandomChar(lowChar) + getRandomChar(upChar)
//   console.log(charcOpt);
// }
// // 3 positive options
// else if (confSpecChar && confNumChar && confUpChar) {
// charcOpt = specChar.concat(numChar, upChar);
// }
// else if (confSpecChar && confNumChar && confLowChar) {
// charcOpt = specChar.concat(numChar, lowChar);
// }
// else if (confSpecChar && confLowChar && confUpChar) {
// charcOpt = specChar.concat(lowChar, upChar);
// }
// else if (confNumChar && confLowChar && confUpChar) {
// charcOpt = numChar.concat(lowChar, upChar);
// }
// // 2 positive options 
// else if (confSpecChar && confNumChar) {
// charcOpt = specChar.concat(numChar);

// } else if (confSpecChar && confLowChar) {
// charcOpt = specChar.concat(lowChar);

// } else if (confSpecChar && confUpChar) {
// charcOpt = specChar.concat(upChar);
// }
// else if (confLowChar && confNumChar) {
// charcOpt = lowChar.concat(numChar);

// } else if (confLowChar && confUpChar) {
// charcOpt = lowChar.concat(upChar);

// } else if (confNumChar && confUpChar) {
// charcOpt = numChar.concat(upChar);
// }
// // 1 positive option
// else if (confSpecChar) {
// charcOpt = specChar;
// }
// else if (confNumChar) {
// charcOpt = numChar;
// }
// else if (confLowChar) {
// charcOpt = lowChar;
// }
// else if (confUpChar) {
// charcOpt = upChar;
// };

// console.log(charcOpt.join(""));

// for (var i = 0; i < charcOpt.length; i ++){
//   console.log(charcOpt[i]);
// }

// for (var i = 0; i < passLen2; i ++){
// randomPass.push(Math.floor(Math.random(charcOpt[i])+1)*charcOpt.length)
// }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

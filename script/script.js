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

// here is the generate Password function that creates the password
function generatePassword() {
  // declaring the variables that is used
  const upperCaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseletters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";

  // declaring the variables for the character choices
  let includeUpperCaseLetters;
  let includeLowerCaseLetters;
  let includeNumbers;
  let includeSymbols;

  // we used the prompt to enter the length
  const length = parseInt(
    prompt(
      "Please enter the length of the password and it should be from 8 to 128 characters!."
    )
  );

  // validate if the user has entered the length needed
  if (!length) {
    alert("The password generator needs value.");
  } else if (length < 8 || length > 128) {
    // validate if the user input the right amount of characters
    length = parseInt(prompt("You must choose between 8 and 128 characters."));
  } else {
    // Continues once user input is validated
    includeUpperCaseLetters = confirm("Include Upper Case Letters?");
    includeLowerCaseLetters = confirm("Include lower Case Letters?");
    includeNumbers = confirm("Include Numbers?");
    includeSymbols = confirm("Include Symbols?");
  }

  // validate if the user didn't choose the right type of characters
  if (
    !includeUpperCaseLetters &&
    !includeLowerCaseLetters &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert("You must choose at least one type of characters!.");
  }

  // check what characters to add to the characters string
  let characters = "";
  includeUpperCaseLetters ? (characters += upperCaseletters) : "";
  includeLowerCaseLetters ? (characters += lowerCaseletters) : "";
  includeNumbers ? (characters += numbers) : "";
  includeSymbols ? (characters += symbols) : "";

  // generate and return a random password frim the characters string
  let password = "";
  for (i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

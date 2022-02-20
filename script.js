// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
////////////////////////////////////////////////////////

// i will write the generatePassword function here
function generatePassword() {

    // i am using const instead of var because const values cannot be reassigned 
    // define lowercase
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    // define uppercase
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // define numbers
    const numeric = "0123456789";

    // define special characters
    // special characters obtained from: https://owasp.org/www-community/password-special-characters
    const special = " !#$%&'()*+,-./:;<=>?@[\]^_`{}|~"

    // i am using let instead of var because let cannot be redeclared
    // prompt for password length
    let passwordLength = prompt("Password may contain 8 to 128 characters. How many characters?");
    // prompt for lowercase
    let passwordLowercase = confirm("Would you like your password to contain lowercase letters?");
    // prompt for uppercase
    let passwordUppercase = confirm("Would you like your password to contain uppercase letters?");
    // prompt for numbers
    let passwordNumbers = confirm("Would you like your password to contain numbers?");
    // prompt for special characters
    let passwordSpecial = confirm("Would you like your password to contain special characters?");
    
}




//////////////////////////////////////////////////////
// Write password to the #password input
// this function will make a password show up
// we need to make the generatePassword function,
// I will write the generate Password function above this one
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


///////////////////////////////////////////////////////////
// Add event listener to generate button
// this is will run the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
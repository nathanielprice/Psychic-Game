//These are my variables for the game
var winCount = 1;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];

//The array for computer to choose from
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

//Logic for the computer to pick a random indexed value from array
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);

// Event Listeners - constructs that listen out for the event happening.
document.onkeyup = function(event) {
    var userChoice = event.key;
    //JavaScript RegExp gi Modifier. The gi modifier is used to do a case insensitive search of all occurrences of a regular expression in a string. Makes the use enter a letter not a number.
    var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
      alert("please enter a letter");
    }
    else {
      console.log(userChoice);
    }
    // This resets the computer choice if the user does not win.
    if (guessesRemaining <= 0) {
        lossCount++;
        document.getElementById("lossCount").innerHTML = lossCount++;
        console.log("You lost!");
        alert("You lost!");
        guessesRemaining = 10;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        document.getElementById("guessesRemaining").innerHTML = 10;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
      }
    // This compares the cpmputer generated and randomly selected choice and the user choice. === means that they are the same. 
    if (computerChoice === userChoice) {
        console.log("YOU WON!");
        alert("YOU WON!");
        document.getElementById("winCount").innerHTML = winCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = 10;
      } else {
        console.log("Guess again!");
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
      }
  }


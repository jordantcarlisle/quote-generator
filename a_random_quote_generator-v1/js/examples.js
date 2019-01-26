

var quotes = [
{
  quote: '',
  source:'',
  citation:'',
  year:''
}

];

/* References
ES5 vs ES6 syntax - https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26

*/

//How to get information from a function
var randomNumber = Math.floor(Math.random() *6 ) + 1;
var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
if (parseInt(guess) === randomNumber) {

document.write('<p>You guessed the number!</p>');

}

else  {

document.write('<p>Sorry. The number was ' + randomNumber + '</p>');

}

// How to get a random number


//

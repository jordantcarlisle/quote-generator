/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
By Jordan T. Carlisle
http://jordancarlisle.com
https://twitter.com/jordantcarlise
https://github.com/jordantcarlise
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// This is an object that stores arrays with quotes.]
var quotes = [
{
  quote: 'I made the internet',
  source:'Al Gore',
  citation:'Britanica',
  year:'2000'
},
{
  quote: "I'm Bob Dole",
  source:'Bob Dole',
  citation:'The Internet',
  year:'1999'
},

{
  quote: 'Health care and education, in my view, are next up for fundamental software-based transformation.',
  source:'Marc Andreessen',
  citation:'Brainy Quotes',
  year:'2019'
},

{
  quote: "I'm Bob Dole",
  source:'Bob Dole',
  citation:'The Internet',
  year:'1999'
},

{
  quote: 'The Internet Made Me',
  source:'Andrew Swartz',
  citation:'Wikipedia',
  year:'2006'
}

];


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(quotes) {
// generate a random number between 0 and the last index in the array parameter
let randomNumber = Math.ceil(Math.random() * 2);
// use the random number and box notation to grab a random item from the array
quotes [randomNumber];
// return the random item
return.getRandomQuote();
};


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
// create a variable that calls the getRandomQuote() function, passing in the quotes array as an argument
let randomQuote = getRandomQuote (quotes);
// create a variable that initiates your HTML string

if (quote.citation && quote.year = true ) print = '<p class="quote">'+ quotes.quote +'</p>'
'<p class="source">'+ quotes.source + '<span class="citation"> ' + quotes.citation + '</span><span class="year">' + quotes.year + '</span></p>'

// using the template in the project instructions, add the two default quote properties
// if there is a quote.citation property, add it the string
// if there is a quote.year property, add it the string
// close the string with the necessary closing HTML tags
// set the innnerHTML of the .quote-box to the complete HTML string
}

function printQuote() {
  getRandomQuote();

  <p class="quote"> [quote here] </p>
  <p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
}

//I need to figure out how to print based on the random number and reference to the the object store.

document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
By Jordan T. Carlisle
http://jordancarlisle.com
https://twitter.com/jordantcarlise
https://github.com/jordantcarlise
******************************************/
//Load quote when clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

var stringOfQuoteProperties = '';

// Object that stores arrays with quotes in global scope.

var quotes = [

  {
    quote: 'I made the internet',
    source:'Al Gore',
    tag: 'politics'

  },
  {
    quote: "I'm Bob Dole",
    source:'Bob Dole',
    citation:'The Internet',
    year:'1999',
    tag: 'politics'
  },

  {
    quote: 'Health care and education, in my view, are next up for fundamental software-based transformation.',
    source:'Marc Andreessen',
    citation:'Brainy Quotes',
    year:'2019',
    tag: 'technology'
  },

  {
    quote: "I'm Bob Dole",
    source:'Bob Dole',
    citation:'The Internet',
    year:'1999',
    //Can an array property have multiple values?
    tag: 'politics'

  },

  {
    quote: 'The Internet Made Me',
    source:'Andrew Swartz',
    citation:'Wikipedia',
    year:'2006',
    tag: 'history',
  },

  {
    quote: 'I know what you mean.',
    source:'OuinerSausage',
    citation:'Discordtopia',
    year:'2019',
    tag: 'philosophy',
  }

];


//This function generates a random number, passes it to the quotes variable, which references the array within the quotes object that coincides with that random number.

function getRandomQuote(array) {
  var rando = Math.floor(Math.random() * array.length);
  return array[rando];
};

function printQuote() {

  var randomQuote = getRandomQuote (quotes);
  var quoteHTML = '<p class="quote">'+ randomQuote.quote +'</p><p class="tag">' + randomQuote.tag + '</p> <p class="source">' + randomQuote.source;
  if (randomQuote.citation){
    quoteHTML += '<span class="citation">' + randomQuote.citation +'</span>';
  }
  if (randomQuote.year){
    quoteHTML += '<span class="year">' + randomQuote.year +'</span>';
  }
  quoteHTML += '</p>';
  document.getElementById('quote-box').innerHTML = quoteHTML;
}
/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Generate random color
randomColorGenerator();
//Update background with new random color
document.getElementById('random-color').style.backgroundColor = randomColorGenerator();

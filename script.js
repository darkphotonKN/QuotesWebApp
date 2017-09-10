
$(document).ready(function() {
  // tests
  function logMsg() {
    console.log("Worked fine.");
  }


  // set up page

  // store array of colors
  var colors = ["#9b59b6", "#bdc3c7", "#16a085", "#bdc3c7", "#d35400"];
  var index = 0; // array index pointer background-color

  // store array of quotes
  var quotes = ['First Quote!', 'No pain, no gain.', 'God played dice with the universe.',
"If you don't sacrifice for your dream, your dream becomes the sacrifice."];
  var indexQuotes = 1; // array initial index pointer for quotes

  // first quote set up
  var initialQuoteTarget = document.getElementById('quote');
  initialQuoteTarget.innerHTML = quotes[0];

  var btnNewQuote = document.getElementById("btn-new"); // referring to the btn-new id
  var divTarget = document.getElementById("quote-box"); // target div to change


  $('#btn-new').click(function() {
    //setTimeout(function() {
    // shift color upon click when quote changes
    changeBGColor();

    //}, 500);


    //$("#container").fadeOut(function() {
      //$(this).text("World")
      //}).fadeIn();

    setTimeout(function() {
      nextQuote();
    }, 800);

  });


  // cycles quote displayed in quote-box
  function nextQuote() {
    // selector
    // jquery
    // var quoteTarget = $('#quote-box');
    // javascript

    // plain js version:
    //var quoteTarget = document.getElementById("quote");

    // jquery version:
    var $quoteTarget = $('#quote');

    // pick random number between 0-4 for index call for a quote
    var rand = randomize(4, 0);

    // display new random quote
    var newQuote = quotes[rand];
    //var $fadeInQuote = newQuote.fadeIn();
    $quoteTarget.text(newQuote).fadeIn();//$fadeInQuote;

    // testing
    console.log(rand);

    /* work in progress - making quotes fade out and in
    var $quoteTargetJQuery = $('#quote');
    $quoteTargetJQuery.css("opacity", "0");

    setTimeout(function() {

      quoteTargetJQuery.css("opacity", "1");

    }, 500);
    */
  }

  function changeBGColor() {

    // change background-color on every "New Quote" click
    var rands = randomize(5, 1);
    $('html,#btn-bar'/*,#quote-box,#btn-bar'*/).css("background-color", colors[rands]);
    //$('html').css('transition', 'background-color 1s linear');

    //divTarget.innerHTML = "hi"; // should only display in quote box if click `works ----

    // testing
    console.log(rands);
  }

  // function to make random number and ensure it's not the same as previous
  var currentRandomNum = 0.5;
  var currentRandomNumBGColor = 0.5

  function randomize(range, bgColor) {

    var rand = Math.floor(Math.random()*range);

    /* two different pointers and setters for current random number to not overlap
    two different calls from random bg-color and random quote resulting in the other
    getting a non-random recurrent result */

    if(bgColor==0) {
      while(rand == currentRandomNum) {
        // randomize again if number is still the same as previous random number
        rand = Math.floor(Math.random()*range);
      }


      // set previous random number into newly generated one
      currentRandomNum = rand;
    }
    if(bgColor==1) {
      while(rand == currentRandomNumBGColor) {
        // randomize again if number is still the same as previous random number
        rand = Math.floor(Math.random()*range);
      }


      // set previous random number into newly generated one
      currentRandomNumBGColor = rand;
    }

    // returns newly generated random num for use
    return rand;
  }







});

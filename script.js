
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
    //setTimeOut(function() {
      nextQuote();
    //}, 500);

  });



  // cycles quote displayed in quote-box
  function nextQuote() {
    // selector
    // jquery
    // var quoteTarget = $('#quote-box');
    // javascript
    var quoteTarget = document.getElementById("quote");

    // pick random number between 0-4 for index call for a quote
    var rand = Math.floor(Math.random()*4);

    // display new random quote
    quoteTarget.innerHTML = "<p2>" + quotes[rand] + "</p2>";

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

    $('html,#btn-bar'/*,#quote-box,#btn-bar'*/).css("background-color", colors[index]);
    //$('html').css('transition', 'background-color 1s linear');

    //divTarget.innerHTML = "hi"; // should only display in quote box if click `works ----

    console.log(index);

    if(index < 4) { // cannot be at 4 as we dont want to increment it at index = 4
      index++;
    } else {
      index = 0; // reset the index to get a loop back to first color
    }
  }








});

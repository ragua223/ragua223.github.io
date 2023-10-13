/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 65,
    RIGHT: 68,
    UP: 87,
    DOWN: 83
  };

  var KEY2 = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
  };

  // Game Item Objects
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0
  };

  var walker2 = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.UP) {
      console.log("w");
      walker.speedY = -5;
    }
    if (event.which === KEY.DOWN) {
      console.log("s");
      walker.speedY = 5;
    }
    if (event.which === KEY.LEFT) {
      console.log("a");
      walker.speedX = -5;
    }
    if (event.which === KEY.RIGHT) {
      console.log("d");
      walker.speedX = 5;
    }
  }

  function handleKeyUp(keyup) {
    if (keyup.which === KEY.UP) {
      walker.speedY = 0;
    }
    if (keyup.which === KEY.DOWN) {
      walker.speedY = 0;
    }
    if (keyup.which === KEY.LEFT) {
      walker.speedX = 0;
    }
    if (keyup.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
  }

  function wallCollision() {
    if (walker.positionX > 390) {
      walker.positionX = 390;
    }
    else if (walker.positionX < 0) {
      walker.positionX = 0;
    }
    else if (walker.positionY > 390) {
      walker.positionY = 390;
    }
    else if (walker.positionY < 0) {
      walker.positionY = 0;
    }
  }

}

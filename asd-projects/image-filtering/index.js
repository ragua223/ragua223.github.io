// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[j].length; j++) {
      var rgbString = image[i][j];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      var newRgbString = rgbArrayToString(rgbNumbers)
      image[i][j] = newRgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];

  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor){
        var rgbString = image[i][j];
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        var newRgbString = rgbArrayToString(rgbNumbers);
        image[i][j] = newRgbString
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {

  var amount = Math.max(num, 0) && Math.min(num, 255);
  return amount;

}


// TODO 3: Create reddify function
function reddify(arr) {
  arr[0] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(arr) {
  arr[2] -= 50;
  console.log(arr)
  arr[2] = keepInBounds(arr[2])
}

function increaseGreenByBlue(arr) {
  arr[1] = keepInBounds(arr[2] + arr[1]);
}

// CHALLENGE code goes below here

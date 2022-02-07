"use strict";

function testConsole (p1) {
  document.querySelector("body").style.backgroundColor = p1;
}
/*

The console is quite powerful
You can for instance call a function that you have defined
in your JS-file from the console. Check the video.

*/


//


function F25 (container) {
for (let i = 0 ; i < 25 ; i++) {
    let divs = document.createElement ("div");
    divs.innerHTML = randomNumber(100);
    container.appendChild (divs);

}
}

function randomNumber (max) {
  return Math.floor( max * Math.random () );
}

console.log(F25 (document.querySelector ("#gridContainer")));

/*

Exercise
Code a function F25 that fills a 5x5 grid with random numbers.
F25 must take one parameter: container. This is the reference to the HTML-element
that is the grid to which all the random numbers will be appended.

We have already done something like this in a previous exercise (Lektion 3, 4a).
You need however to place it in a function and you need to use the parameter
when appending the numbers (the divs that contain the numbers) to the gridContainer.

Test the function by calling it from the console.

VIDEO:  Record a video where you explain how F25 works line by line. Max 3 minutes.
        This video must be called F25Explanation.
        The video must also show how you call F25 from the console.

*/
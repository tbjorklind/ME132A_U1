"use strict";


/*

The console is quite powerful
You can for instance call a function that you have defined
in your JS-file from the console. Check the video.

*/

// function testConsole (p1) {
//   document.querySelector("body").style.backgroundColor = p1;
// }

let containerRef = document.querySelector ("#gridContainer");

for (let i = 0 ; i < 25 ; i++) {

    let divs = document.createElement ("div");
    divs.innerHTML = F25(100);

    containerRef.appendChild (divs);
}

function F25 (max) {
  return Math.floor( max * Math.random () );
}

console.log ()


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

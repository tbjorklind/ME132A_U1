"use strict";



function gridMaker (gridContainer, R, C) {

    gridContainer.style.display ="grid";
    gridContainer.style.height ="50vh";
    gridContainer.style.width ="50vh";
    gridContainer.style["gridTemplateRows"] = `repeat(${R}, 1fr)`;
    gridContainer.style["gridTemplateColumns"] = `repeat(${C}, 1fr)`;
}

gridMaker( document.querySelector("#grid"), 2, 6 );


/*
function createAndAppend ( color ) {
  let e = document.createElement( "div" );
  e.style.backgroundColor = color;

E1
Study the HTML-file in this exercise.

We will now code a function gridMaker() that accepts these arguments (parameters):
- gridContainer: a reference to the HTML-element that is the grid
- R: the number of rows that the grid must have
- C: the number of columns that the grid must have

gridMaker then must update the CSS properties gridTemplateColumns and gridTemplateRows of the gridContainer.
Note that the grid DOES NOT yet need to be filled with divs!


TEST
The call gridMaker( document.querySelector("#grid"), 2, 6 ) should result in the HTML-element
with id "grid" having 2 rows and 6 columns

The call gridMaker( document.querySelector("#grid"), 4, 1 ) should result in the HTML-element
with id "grid" having 4 rows and 1 columns

The HTML-element #grid will however be empty since we have not appended any other elements to it.


*/


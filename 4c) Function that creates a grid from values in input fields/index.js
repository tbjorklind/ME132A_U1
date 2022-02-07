"use strict";

function gridMaker (gridContainer, R, C) {

    gridContainer.style.display ="grid";
    gridContainer.style.height ="50vh";
    gridContainer.style.width ="50vh";
    gridContainer.style["gridTemplateRows"] = `repeat(${R}, 1fr)`;
    gridContainer.style["gridTemplateColumns"] = `repeat(${C}, 1fr)`;
}


let newGridBtn = document.querySelector ("button");
newGridBtn.addEventListener ("click", function () {
    
    let valueRows = document.getElementById ("inputRows").value;
    let valueColumns = document.getElementById ("inputCols").value;
    
    console.log(valueRows, valueColumns);
    gridMaker( document.querySelector("#grid"), valueRows, valueColumns );
});

/*

We will continue with our work from 4b.
We need to fix these two things:

First:
gridMaker must be called each time the user clicks on the button (See index.html).


Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/


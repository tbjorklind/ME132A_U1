"use strict";

/*

By now, you whould have a JS-program that fills a grid of X columns and Y rows
with random numbers (a div for each) between 0 and 99.
The values of R and C come from the input fields.

Now we will add code so that we can select and deselect numbers
from the grid by clicking on them.

*/
function gridMaker (gridContainer, R, C) {

        gridContainer.style.display ="grid";
        gridContainer.style["gridTemplateRows"] = `repeat(${R}, 1fr)`;
        gridContainer.style["gridTemplateColumns"] = `repeat(${C}, 1fr)`;

        gridContainer.innerHTML = "";

        for ( let i = 0; i < C; i++ ) {
                for ( let ii = 0; ii < R; ii++ ) {
                        gridContainer.appendChild(createNumberDiv ());
        };
        };
}

    function createNumberDiv () {
        let divs = document.createElement ("div");
        divs.innerHTML = Math.floor( 99 * Math.random ());
        divs.addEventListener ("click", function () {
        divs.classList.toggle ("selected");

    });
        return divs;
    };


    document.querySelector ("button").addEventListener ("click", function () {
        gridMaker (
            document.querySelector("#grid"),
            document.getElementById ("inputRows").value,
            document.getElementById ("inputCols").value
        )
});


document.onload = gridMaker(document.querySelector("#grid"), document.querySelector("#inputRows").value, document.querySelector("#inputCols").value);
window.onload = gridMaker(document.querySelector("#grid"), document.querySelector("#inputRows").value, document.querySelector("#inputCols").value);
/*

STEP 1
The first thing we need is a CSS-class called selected.
Add CSS-rules for .selected to the CSS-file. A change of 
background-color and color is enough but feel free!

*/

/*

STEP 2
Now you need to understand how elementRef.classList.toggle() works.
Check it out here:
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
or here:
https://www.w3schools.com/howto/howto_js_toggle_class.asp

*/


/*

STEP 3
As mentioned above, the number will be selected / deselected when the user clicks on it.
Clearly, we need to add an eventListener to each of the numbers in the grid (or,
more correctly, to each of the divs in the grid). We've called them numberDivs.

The best way to do that is to add the eventListener when the numberDiv is created.
The numberDivs are created in the function createNumberDiv(), so that is where each numberDiv
must get its eventListener.

The only thing the eventListener needs to do (so far) is to toggle the class "selected" from
the classList.

*/
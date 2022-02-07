"use strict";

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

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/
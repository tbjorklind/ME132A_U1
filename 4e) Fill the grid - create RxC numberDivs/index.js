"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/
let valueRows = document.getElementById ("inputRows").value;
let valueColumns = document.getElementById ("inputCols").value;



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
};

// function gridMaker(gridContainer, C, R){
        
//         gridContainer.style.display = "grid";
//         gridContainer.style["grid-template-columns"] = `repeat(${R}, 1fr)`;
//         gridContainer.style["grid-template-rows"] = `repeat(${C}, 1fr)`;
        
//         for(let i = 0; i < C * R; i++){
//                 gridContainer.appendChild(createNumberDiv())
//         }
// };

console.log(gridMaker( document.querySelector("#grid"), valueRows, valueColumns));

    function createNumberDiv () {
        let divs = document.createElement ("div");
        divs.innerHTML = Math.floor( 99 * Math.random ());
        return divs;
    };
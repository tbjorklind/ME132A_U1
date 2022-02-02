"use strict";

/*

ACCESSING DATA IN AN INPUT FIELD

Input fields are HTML-elements:
<input>
which can be of different types. See here for a list of available types:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input


In this exercise we will be using <input type="number">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number


*/

// E1:  Add an input field of type number to the HTML-file


// E2:  Give the input field the id "input_test_1"


// E3:  Check what the attribute size does:
//      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
//      (size works also for type="number")
//      Make sure that the input field looks good for numbers from 0 to 99. (Pretty small)
//      Use the attribute size for this.


// E4:  Find out which attributes can be used to set a max and a min value
//      for a given input field.
//      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
//      Set the max value to 17 and the min value to 1


// E5:  Find out how to set an initial value for an input field.
//      Set the initial value of input_test_1 to 13


// E6:  To get the value shown in an input field we use this:
//      document.querySelector("#input_test_1").value
//      Log to the console the current value of #input_test_1. It should
//      be 13, if you managed the previous E correctly.


// E7:  Add a button <button> to the HTML-file.
//      Give it the id "button_test_1"


// E8:  Add an event listener to the button so that when the user clicks on it
//      the browser logs the current value of the input field on the console.
//      Test this by manually changing the value of the input field. That is,
//      by going to the webpage and changing that value.


// E9:  NOTE that the value from the input field is a string, even if the input
//      had type="number". You can see this in two ways:
//      1) By the color the value has when logged to the console (white). Numbers are green.
//      2) If you try + 1 to the value you get a concatenation (string) not an addition (number)
//      Test both ways.


// E10: We want to transform the string "1" (for instance) into the number 1.
//      This can be done with parseInt().
//      So parseInt("1") will return the number 1
//      What will be logged in the lines below?
let a = "23";
// console.log( parseInt( a ) + 1 );
// console.log( a + 1 );


// E11: Code a function (F1) that adds 23 to the number in the input field and
//      logs the result to the console.


// E12: Now make sure that F1 is called when the user clicks on #button_test_1
//      Test it!
// Note (once you're done) that the previous listener (added above) is still active and working.
// We can have several listeners for the same event on the same element.



//  By now, your code should log two lines:
//    one with the value of the input field
//    another one with 23 + the numberic value of the input field
//  every time the user clicks on the button.
//  Well done!


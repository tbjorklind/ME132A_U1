"use strict";

/*

The function below (adder_three) takes an array of 3 elements as an argument
and returns the sum of all those elements.

Note: The function only works if the elements in the array (argument) are numbers.

TEST
adder_three([1, 1, 1]) should return 3
adder_three([2, 1, -2]) should return 1
*/


let a1 = [1, 2, 3];
// console.log( adder_three( a1 ) ); // this logs 6 since 1 + 2 + 3 is 6

function adder_three ( _array ) {
  let sum = 0;
  for ( let i = 0; i < 3; i++ ) { 
    sum = sum + _array[i];
  }
  return sum;
}


/*

The problem with adder_three is that it only works if the argument is an array of 3 elements.

You must code a function (adder) that takes any array (with any number of elements)
as an argument and returns the sum of all those elements. The same as adder_three but it needs to
work for any array.
The problem is of course that do not know beforehand how many elements the array will have.
So the for-loop must be different than for ( let i = 0; i < 3; i++ ) { ... }
We cannot have that 3 in there.
We need instead to write there the amount of elements the argument has.
In an earlier lecture and exercise we have seen something that tells us how many elements
an array has. Find it and use it here.

The function only needs to work when all the elements are numbers.

TEST
adder([5, 2, 1, 7]) should return 15
adder([1]) should return 1
adder([0]) should return 0


VIDEO:  Make a video where you explain how adder works line by line. Max 3 minutes.
        This video must be called adderExplanation.

*/

function adder (_arr) {
  let summ = 0;
  for (let i = 0 ; i < _arr.length ; i++){
    summ = summ +_arr[i];
  }
  return summ;

}
console.log (adder(a1))


// 
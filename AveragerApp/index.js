'use strict'

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link: https://github.com/tbjorklind/ME132A_U1

// GLOBAL VARIABLES
// None allowed

// FUNCTION DECLARATIONS (in alphabetical order)

function adder (_array) {
  let sum = 0
  for (let i = 0; i < _array.length; i++) {
    sum = sum + _array[i]
  }
  return sum
}

function averg (_arr) {
  let average = adder(_arr) / _arr.length
  average = roundString(average, 1)
  return average
}

function createNumberDiv () {
  let divs = document.createElement('div')
  divs.innerHTML = Math.floor(99 * Math.random())
  divs.addEventListener('click', function () {
    divs.classList.toggle('selected')

    divs.addEventListener('click', updateResults('selected'))
  })
  return divs
}

function getArrayOfSelectedNumbers (className) {
  let arrayElements = Array.from(document.querySelectorAll('.' + className))
  let arrayNumbers = []

  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML
    let number = parseInt(numberAsString)
    arrayNumbers.push(number)
  }
  return arrayNumbers
}

function gridMaker (gridContainer, R, C) {
  gridContainer.style.display = 'grid'
  gridContainer.style['gridTemplateRows'] = `repeat(${R}, 1fr)`
  gridContainer.style['gridTemplateColumns'] = `repeat(${C}, 1fr)`

  gridContainer.innerHTML = ''

  document.querySelector('#selected span').innerHTML = ''
  document.querySelector('#amount span').innerHTML = ''
  document.querySelector('#sum span').innerHTML = ''
  document.querySelector('#average span').innerHTML = ''

  for (let i = 0; i < C; i++) {
    for (let ii = 0; ii < R; ii++) {
      gridContainer.appendChild(createNumberDiv())
    }
  }
}

function roundString (numberWithManyDecimals, decimals) {
  var rounded = Math.pow(10, decimals)
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(
    decimals
  )
}

function updateResults (className) {
  let array = getArrayOfSelectedNumbers(className)

  let selected = array.join(', ')

  let amount = array.length
  let sum = adder(array)
  let average = roundString(averg(array), 1)

  document.querySelector('#selected span').innerHTML = selected
  document.querySelector('#amount span').innerHTML = amount
  document.querySelector('#sum span').innerHTML = sum
  document.querySelector('#average span').innerHTML = average
}

// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS

document.querySelector('button').addEventListener('click', function () {
  gridMaker(
    document.querySelector('#grid'),
    document.getElementById('inputRows').value,
    document.getElementById('inputCols').value
  )
})

// DIRECT CODE
document.onload = gridMaker(
  document.querySelector('#grid'),
  document.querySelector('#inputRows').value,
  document.querySelector('#inputCols').value
)

window.onload = gridMaker(
  document.querySelector('#grid'),
  document.querySelector('#inputRows').value,
  document.querySelector('#inputCols').value
)

// Initialise the page directly, no need to wait for user to click first time.

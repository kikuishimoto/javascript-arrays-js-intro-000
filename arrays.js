var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element) {
  returm [element, ...array]

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)

  return array
}

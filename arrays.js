var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray() {
  var myArray = ['1', '2', '3'];
  return ['0', ...myArray];

}

function destructivelyAddElementToBeginningOfArray() {
  var myArray = ['1', '2', '3']
  myArray.unshift('0')

  myArray
}

function myMap(inputArray, callback) {
  // Your code here
  let cbArray = []
  for (let num of inputArray) {
    cbArray.push(callback(num))
  }
  return cbArray
}
const arr = [1, 2, 3];
const callback = (el) => el * 2;

console.log(myMap(arr, callback)); // prints [2,4,6]
//console.log(arr); // prints [1,2,3]
module.exports = [myMap];

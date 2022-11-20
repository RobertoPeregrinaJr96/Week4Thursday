function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  return (1 / n)
}

// console.log()
console.log(returnsThree())
console.log(reciprocal(100))
module.exports = {
  returnsThree,
  reciprocal
};

// function returnsThree() {
//   //!!START
//   return 3;
//   //!!END
// }

// function reciprocal(n) {
//   //!!START
//   if (n < 1 || n > 1000000) {
//     throw new TypeError("Number out of range from 1 to 1000000");
//   }
//   return 1 / n;
//   //!!END
// }

// module.exports = {
//   returnsThree,
//   reciprocal
// };

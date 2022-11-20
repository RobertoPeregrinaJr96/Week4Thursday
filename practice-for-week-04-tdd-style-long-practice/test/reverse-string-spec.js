// Your code here
const {reverseString}  = require("../problems/reverse-string");

const chai = require("chai");
const expect = chai.expect;


describe("reverseString(string)", () => {
    it("should be a string", function () {
        const str1 = "string"
        const revStr = reverseString(str1); // "gnirts"
        const strRev = "gnirts"
        expect(revStr).to.equal(strRev)
       // expect(revStr).to.be.true;        //dont really need it
    })
    it("It should not be a number", () => {
        const num1 = 3;
        expect(() => reverseString(num1).to.throw(Error))
        //const revStr2 = reverseString(num1); // not safe to use
        //expect(revStr2).to.be.false       // dont really need it
    })
    it("it should not be a array", () => {
        const arr1 = [];
        //const revStr3 = reverseString([]) // not safe to use
        expect(() => reverseString(arr1).to.throw(Error))
        // expect(revStr3).to.be.false          //dont really need it
    })
})


// //!!START
// const chai = require("chai");
// const expect = chai.expect;
// const spies = require("chai-spies");
// chai.use(spies);

// const reverseString = require("../problems/reverse-string");

// describe("reverseString()", () => {
//   it("should reverse a string", () => {
//     const expectedString = "nuf";
//     const reversedString = reverseString("fun");
//     expect(reversedString).to.eql(expectedString);
//   });

//   it("should throw an error when passed a non-string value", () => {
//     expect(() => reverseString(1)).to.throw(TypeError);
//     expect(() => reverseString([1, 2, 3])).to.throw(TypeError);
//   });
// });
// //!!END

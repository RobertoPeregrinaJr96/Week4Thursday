// Your code here
const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require(`../problems/number-fun`)

describe('returnThree()', () => {
    it('it should return 3', () => {
        expect(returnsThree()).to.equal(3)
    })
})

describe('reciprocal()', () => {
    it('it should be the reciprocal of n', () => {
        const num = 4
        expect(reciprocal(num)).to.equal(0.25)
    })
    it('it works',()=>{
        let str = 'sad'
        let arr = [1,6,5,956,661,14,0]
        let bol = true
        expect(() => reciprocal(str).to.throw(Error))
        expect(() => reciprocal(arr).to.throw(Error))
        expect(() => reciprocal(bol).to.throw(Error))
    })
})


// //!!START
// const chai = require('chai');
// const expect = chai.expect;

// const { returnsThree, reciprocal } = require("../problems/number-fun");

// describe("returnsThree()", () => {
//   it("should return a three", () => {
//     expect(returnsThree()).to.eq(3);
//   });
// });

// describe("reciprocal()", () => {
//   context("valid arguments", () => {
//     it("should return the reciprocal", () => {
//       expect(reciprocal(4)).to.eq(0.25);
//       expect(reciprocal(1)).to.eq(1);
//       expect(reciprocal(999999)).to.eq(0.000001000001000001);
//     });
//   });

//   context("invalid arguments", () => {
//     it("should throw an exception when passed a number less than one", () => {
//       expect(() => reciprocal(0)).to.throw(TypeError);
//       expect(() => reciprocal(-1)).to.throw(TypeError);
//     });

//     it("should throw an exception when passed a number greater than 1 million", () => {
//       expect(() => reciprocal(1000001)).to.throw(TypeError);
//     });
//   });
// });
// //!!END

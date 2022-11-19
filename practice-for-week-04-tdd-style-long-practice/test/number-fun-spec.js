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

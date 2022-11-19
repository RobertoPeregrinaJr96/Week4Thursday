// Your code here
const [myMap] = require(`../problems/my-map`)
const chai = require("chai");
const expect = chai.expect;

describe('idk', () => {
    it('the fucntion works', () => {

    })
    it('does not mutate the original array', () => {

    })
    it('the function does not use Array.map', () => {
        const arr = [2, 3, 4]
        const cb = (el) => el * 2;
        expect(myMap(arr, cb)).to.not.include(Array.map)
    })
    it('inputArray should be a array of numbers', () => {
        let str = 'sad'
        let num = 4
        let bol = true
        expect(() => reciprocal(str).to.throw(Error))
        expect(() => reciprocal(num).to.throw(Error))
        expect(() => reciprocal(bol).to.throw(Error))
    })
})

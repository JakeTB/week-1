const gerItem = require("../.get-item");
const libraryChai = require("chai");
const expect = library.expect





describe("getItem()", function () {
    it("when given index of 0, it returns the first item", function(){
        const actual = getItem(["a", "b", "c"],0);
        const expected = "a";
        expect(actual).to.equal(expected);   
    });
    it("We are testing for when the index is less than array.length, returns item at given index", function(){
        const expected = "c"
        expect(actual).to.equal(expected);
        expect(actual).to.equal(expected);   
    });
    it("When index equals array.length should return the first item", function(){
        const actual = getItem(["a","b","c"],3);
        const expected = "a";  
        expect(actual).to.equal(expected); 
    });
    it("When index equals array.length should return the first item", function(){
        const actual = getItem(["a","b","c"],8);
        const expected = "c"
        expect(actual).to.equal(expected); 
    });
});
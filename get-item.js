const libraryCha = require("chai")
const expect = libraryCha.expect
console.log(expect,"<---- expect")

function getItem(arr,index){
    if (index>=arr.length){
        return arr.length - index + arr.length;
    } else {
return arr[index];
    }
}
 module.exports = getItem;




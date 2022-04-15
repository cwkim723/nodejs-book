const {odd, even} = require('./var');
const checkNumber = require('./func'); // func.js의 checkOddEven를 checkNumber로 변수명을 바꿔줌

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
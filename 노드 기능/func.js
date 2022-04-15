// 과거 문법
// const value = require('./var') // function 안 붙여도 됨. node에서 제공
// const odd = value.odd;
// const even = value.even;
/**
    './var'
    ../var : 부모폴더
    ../../var : 조부모폴더
    ./var : 현재폴더
 */

// console.log(value) // {odd: '홀수입니다', even: '짝수입니다'}


// 현재 문법
// const {odd, even} = require('./var') // function 안 붙여도 됨. node에서 제공
import {odd, even} from  './var'  // function 안 붙여도 됨. node에서 제공


function checkOddEven(number){
    if(number % 2){
        return odd;
    } else {
        return even;
    }
}

// 하나 내보낼 때
// module.exports = checkOddEven;
export default checkOddEven;

// 여러 개 내보내고 싶을 때
// module.exports = {
//     checkOddEven,
//     odd,
//     even,
// }


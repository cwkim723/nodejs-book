function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}
// 함수의 이름은 변수명으로, function 키워드는 => 로
// 화살표 함수의 장점: 훨씬 간결해짐
// 중괄호랑 return이 바로 나오면 생략 가능

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x){
    return !x;
}

const not2 = x => !x;


// ======================================================


// const obj = (x, y) => {
//     return {x, y};
// }

// const obj = (x, y) => {x, y};
// {}가 함수의 바디인지 return 객체인지 판단 불가능

const obj = (x, y) => ({x, y});
// {}가 return 객체로 올때만 ()로 감싸준다!!


// ======================================================

/* 화살표 함수가 기존 function(){}을 대체하는 것은 아님(this가 달라짐)
    logFriends 메서드 this 값에 주목.
    forEach의 function의 this와 logFriends의 this는 다름
    that이라는 중간 변수를 이용해 logFriends의 this 전달 */
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function(){
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
            console.log(this.name, friend);
            /*
                zero nero
                undefined nero
                zero hero
                undefined hero
                zero xero
                undefined xero
            */
        });
    },
};
relationship1.logFriends();

// 화살표 함수의 this
/**
    화살표 함수의 this는 무조건 부모의 this를 물려받음
    forEach의 화살표 함수의 this와 logFriends의 this가 같음
 */
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends(){
        this.friends.forEach(friend => {
            console.log(this.name, friend);
            /*
                this.friends의 this와 this.name의 this는 같은 this
                zero nero
                zero hero
                zero xero
            */
        });
    },
};
relationship2.logFriends();

this;
button.addEventListener('click', function(){
    console.log(this.textContext);
    // 동작 안 함
    // 여기의 this는 바깥의 this
})
button.addEventListener('click', () => {
    console.log(this.textContext);
})






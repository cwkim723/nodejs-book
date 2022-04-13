var won = 1000;
var result = '이 과자는 ' + won + '원입니다.';
// 이 과자는 1000원입니다. -> 띄어쓰기도 다 해줘야 함.

const result = `이 과자는 ${won}원입니다.`;

function a(){}
a();
a``; // tagged template literal

// ES5 시절 객체 표현 방법
var sayNode = function(){
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic

// 훨씬 간결한 문법으로 객체 리터럴 표현 가능
// 객체 메소드에 :function 안 붙여도 됨
// {sayNode:sayNode}와 같은 것을 {sayNode}로 축약 가능
// [변수 + 값] 등으로 동적 속성명을 객체 속성 명으로 사용 가능
const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
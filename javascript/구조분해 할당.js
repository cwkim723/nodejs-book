const example = { a: 123, b: {c :135, d: 146}}

// 과거
// const a = example.a;
// const d = example.b.d;

// 새로운 문법
const { a, b: {d}} = example;
console.log(a); // 123
console.log(d); // 146

// =====================================================

arr = [1, 2, 3, 4, 5];

// 과거
// const x = arr[0]
// const y = arr[1]
// const z = arr[4]

// 새로운 문법
const [x, y, , , z] = arr;

// =====================================================

// 과거 문법
var CandyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 최신 문법
var CandyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const { getCandy, status: {count}} = candyMachine;
// const {변수} = 객체;로 객체 안의 속성을 변수명으로 사용 가능

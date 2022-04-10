function first(){
    second();
    console.log('첫 번째');
}

function second(){
    third();
    console.log('두 번째');
}

function third(){
    console.log('세 번째');
}

first();

/*
    호출 스택(함수의 호출, 자료구조의 스택)

    쌓    ↑        third()          |   실
    이    |        second()         |   행
    는    |        first()          |   순
    순    |        anonymous        ↓   서
    서

    - Anonymous는 가상의 전역 컨텍스트(항상 있다고 생각하는 것이 좋음)
    - 함수 호출 순서대로 쌓이고 역순으로 실행
    - 함수 실행이 완료되면 스택에서 빠짐
    - LIFO 구조라 스택이라 부름
    - 호출 스택이 empty 상태가 되면 실행 완료
*/

function run(){
    console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000); // setTimeout: 비동기
console.log('끝');
/*
    시작 -> 끝 -> 3초 후 실행
    호출 스택만으로는 설명 불가 -> 호출 스택 + 이벤트 루프로 설명 가능
*/
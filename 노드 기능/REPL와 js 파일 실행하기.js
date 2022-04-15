// REPL
// 자바스크립트는 스크립트 언어라서 즉석에서 코드 실행 가능
// REPL이라는 콘솔 제공: R(Read), E(Evaluate), P(Print), L(Loop)
// 윈도우에서는 명령 프롬프트, 맥이나 리눅스에서는 터미널에 node 입력

function helloWorld(){
    console.log('Hello World');
    helloNode();
}

function helloNode(){
    console.log('Hello Node');
}

helloWorld();
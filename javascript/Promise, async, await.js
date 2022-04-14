const promise = new Promise(...)

promise.then((result) => ...)

// 최신 함수
async function main(){
    // catch가 없음 -> try catch로 감싸줘야 함.
    try{
        const result = await promise; // then이 await으로 옴
        return result;
    } catch(error) {
        console.error(error);
    }
    
}

// 방법 1
main().then((name) => ...)
// 위의 result가 name으로 옴

// 방법 2
const name = await main()
// 위의 result가 name으로 옴
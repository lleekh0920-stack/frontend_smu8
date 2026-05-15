"use strict"
//l60_excepton
//예외 == 오류
//try-catch : 예외를 잡아내는 문법
let result=10/0;
console.log(result)
try{
a=20; //엄격모드(use strict)에서 선언없이 변수를 생성하는 것은 오류

}catch (e) {
    console.log("오류:",e.message);
}
console.log("js 엔진이 멈추지 않으면 실행되는 코드");


let jsonStr="{\"key\':13}";
try{
    const obj=JSON.parse(jsonStr);
    console.log(obj);
}catch (e) {
    console.log(e.message);
}
//수로 파싱할때 생기는 오류 -> NaN
let str='삼십삼';
let n=Number(str);
console.log(n);
console.log("13"-1);
console.log("13">1);
console.log("13"==13);
console.log("13"===13);// 형변환없이 비교
console.log("13"+13);// 이때는 수를 문자열로 반환
//NaN는 무조건 false기 때문에 NaN끼리 비교불가
console.log(NaN==NaN);
console.log(Number.isNaN(NaN));
console.log(isNaN("13ss"));
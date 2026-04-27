console.log(a); //undefined
//console.log(l); //오류
var a=10; //a가 선언되기 전에 전역에 생성 => 호이스팅
let l=20;
//절차형언어 : 코드가 순서대로 실행

console.log(sum(11,22,33));//비정상적인 순서로 실행 (호이스팅)
function sum(a,b,c){
    return a+b+c;
}
function sum(a,b){ //마지막에 선언한 함수만 남는다.
    return a+b;
}
console.log(sum(11,22,33));//정상적인 순서로 실행
let a=10;
let b=10;
let c="10";

console.log()
console.log()
console.log()
console.log()

a=0;
b=1;
c="1";
// > < >= <= : 수만 비교 가능 (수가 아닌데이터는 무조건 수로 형변환)
console.log(a<b);
console.log(a<c);
console.log("A">"B");
console.log("A"<"B");
console.log("AA"<"AB");

console.log(null+10);// 수학적 연산은 null->0으로 변환
console.log(null==0);// null 과 0을 비교할때 null 을 0으로 바꾸지 않음
console.log(Number(null)==0);
console.log(null>-1); //키기비교시 0으로 변환
let n=null;
console.log(n==null);
console.log(undefined==0);
console.log(undefined>-1); //undefined 는 NaN입니다.
console.log(NaN>-1); // NaN는 오류인 상태기 때문에 어떤 비교도 false

console.log(undefined==null); //true
console.log(undefined==null); //false

console.log(Number("안녕!!"));
console.log("안녕!!">1);
console.log(NaN==NaN); //false
console.log(Number.isNaN(NaN)) // NaN인지 확인
console.log(Number.isNaN("이십"))//NaN인지 확인
console.log(isNaN("이십")); // 해당 데이터가 수로 형변환이 안되니?
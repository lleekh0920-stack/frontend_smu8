// 논리연산 AND 와 OR
let a=10, b=20, c=30;
let result=(a>b) || (b<c);
console.log(result);
// or || : 하나라도 true 인것이 있니?
result= ++a<b || ++a>b || ++a>b;
console.log(result,a);

result= b<c || ++b>c || ++b>c || ++b>c;
console.log(result,b);

a=10;b=20;c=30;
// and && : 모두가 true이니? 하나라도 false 가 있으면 false (의심병)
result=(a>b) && (b<c);
console.log(result)
result=a<b && b<c;
console.log(result);
result=a<b && b<c && a>c;
console.log(result);

result= ++a<b && ++a<b && ++a<b;
console.log(result,a);
// && 는 falser 가 하나라도 있으면 false 기 때문에 false 발견시 연산 종료


//해당 문자열이 NaN가 아니면 수로 형변환
let str="sdfafdadfa";
let n=Number(!isNaN(str) && Number(str));
console.log(str,n)

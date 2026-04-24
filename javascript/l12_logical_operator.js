// 논리연산 AND OR
let a=10,b=20,c=30;
let result= (a>b) || (b<c);
console.log(result)
//or || : 하나라도 true인 것이 있니?
result= ++a>b || ++a>b || ++a>b;
console.log(result,a);

result= b<c || ++b>c || ++b>c || ++b>c;
console.log(result,b);

a=10;b=20;c=30;
//and && : 모두가 true이니?  하나라도 false가 있으면 false (의심병)
result= (a>b) && (b<c);
console.log(result)
result= a<b && b<c && a>c;
console.log(result);

result= ++a<b && ++a<b && ++a<b;
console.log(result,a);
//&& 는 false가 하나라도 있으면 false 기 때문에 false 발견시 연산 종료
result= b>c && ++b<c && ++b<c && ++b<c;
console.log(result,b);


//해당 문자열이 NaN 가 아니면 수로 형변환
let str="ddsfdsdf10dfsdf";
let n= Number( !isNaN(str) &&  Number(str) );
console.log(str,n)




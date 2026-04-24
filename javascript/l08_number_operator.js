//alert("d"); 브라우저 js 기능
console.log(10+20); //+ 더하기
let a=7,b=2;
console.log(a,b);
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b);
console.log("a**b",a**b);
console.log("b**a",b**a);
console.log("Math.pow(a,b)",Math.pow(a,b));
console.log("Math.pow(b,a)",Math.pow(b,a));
let i=10;
console.log("i",i);
console.log("++i",++i);
console.log("++i",++i);
console.log("++i",++i);
console.log("--i",--i);
console.log("--i",--i);
console.log("--i",--i);
//후위 증감연산 (앞쪽 연산에게 양보)
console.log("i++",i++);
console.log("i",i);
let result=i-- * i--;
console.log(result,i)

//대입 연산
i = i + 100;
console.log(i);
i+=100;
console.log(i);
i+=1; //== ++i (증감연산은 증감대입연산이다.)
console.log(i)
//문자열을 수로 형변환
let s="12.33";
console.log(Number(s))
let f=true;
console.log(Number(f));//true == 1
f=false;
console.log(Number(f));//false == 0
s="삽십삼점육육";
console.log(Number(s)) //NaN
//숫자가 아닌 것을 수로 바꾸려는 에러인 상태
// 에러를 발생시키지 않는 이유가 무엇일까??


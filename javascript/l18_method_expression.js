//함수의 호이스팅을 막는 함수 표현식

console.log(multi(11,22));
function multi(a,b){ //일반적인 함수 선언
    return a*b;
}

//console.log(sum(11,22)); //오류
//이름 없는 함수는 호이스팅을 하지 않는다.(선언된 그자리에서 생성됨)
let sum=function (a,b){ //함수 표현식 (이름 없는 함수를 변수가 참조해서 이름을 만들어줌)
    console.log("매개변수가2개인sum");
    return a+b;
}
console.log(sum(11,22));
sum=function (a,b,c,d){
    console.log("매개변수가4개인sum")
    return a+b+c+d;
}
console.log(sum(11,22,33,44));
//js 스크립트,인터프리터언어로 코드를 컴퓨터가 읽기 좋게 컴파일하지 않고 바로 실행함.
//java 는 문자열(java)인 코드를 컴파일(class)하고 나중에 컴파일된 것을 실행

sum=(a,b,c)=>{return a+b+c;};//화살표함수
sum=(a,b,c)=>a+b+c;//화살표함수 리턴 생략코드
console.log(sum(111,222,333))

let print=(str1,str2)=>{
    console.log(str1,str2);
    //console.log(ddddd)
}
print("안녕","하세요");




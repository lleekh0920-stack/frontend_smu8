let str1="경민";
let str2="코딩";
let str3=str1 + str2;
console.log(str3);
//문자열은 + 연산으로 열을 이어 붙일 수 있다. (concat)
str3=str1.concat(str2);
console.log(str3)
str3=str3-"코딩";
console.log(str3);//NaN
console.log("안녕"*3);//NaN
//js 에서 문자열은 + 연산만 가능
//나머지 -,/,*,%,** 연산자는 수만 가능하다.
//수가 아닌 데이터를 수학적 연산을 하려할때 강제 형변환을 함
console.log(Number("안녕")*3);
//NaN 수가 아닌 에러 상태이기 때문에 어ㄸ너 수와 연산해도 NaN이다.
console.log("13.33"/2);//6.665

// + 더하기 연산에 문자열이 있다면 문자열 더하기 연산으로 취급
// + 문자열 더하기 연산에서 수를 문자열로 형변환
console.log("3"+3);
console.log(Number("3")+3);
console.log("3"*3);
console.log("3"/3);
console.log("3"%3);

console.log(3+true); //4
console.log(Number("3")+true); //4
console.log("3"+true)//3true
console.log("3"+false)//3false

console.log(1+null);
//Number(null)= 0;
console.log(1+null); //1
console.log("1"+null); //1null

let u; //undefined: 정의되지 않음
console.log(Number(u));//NaN
console.log(u*1);//NaN
console.log(u+1);//NaN
console.log("1"+u); //1undefined


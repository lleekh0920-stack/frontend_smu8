//Boolean() -> true인지 false 인지 확인 (형변환)
console.log(Boolean(1));
console.log(Boolean(-1));
//js 는 존재하지 않음을 false 로 본다
console.log(0,Boolean(0));
console.log("null",Boolean(null));
console.log("undefined",Boolean(undefined));
console.log("NaN",Boolean(NaN));//상태가 오류로 거짓

//문자열 존재하면 true  ("false"를 false 로 변경불가)
console.log("'  '",Boolean("  "));
console.log("false",Boolean("false"));
console.log("''",Boolean(""));//문자열이 비어있으면 false

console.log(NaN===NaN);
console.log(null===null);
console.log(undefined===undefined);

console.log("-0",Boolean(-0));
console.log("0===-0",0===-0) //물리적으로 다르지만 비교연산은 값을 비교하기때문에 true

let arr=[1,2,3];
console.log(arr);
arr=new Array(10,20,30);
console.log(arr)
arr=Array.of(100,200,300);
console.log(arr)
arr=new Array(10);
console.log(arr[0]); //empty 가 호출되면 undefined가 된다.
arr=Array.of(10);
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);//undefined , 자바는 오류

arr=["사과","딸기","망고","배","망고스틱"];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
//js 의 배열 Array 는 길이 변경이 가능한 배열(java는 불가능 -> ArrayList 사용)
console.log(arr);
console.log(arr.splice(2,2));
console.log(arr)
arr[3]="파인애플";
console.log(arr)
arr[10]="바나나"
console.log(arr);
//Array 타입이 아닌데 길이와 인덱스가 있는 데이터를 유사배열 (문자열)
let str="abcdefghij";
console.log(str.length);
console.log(str[2]);// java -> str.charAt(2)

//Array.from(유사배열) : 유사배열을 Array 로 변경
arr= Array.from(str);
console.log(arr);

const arr=[10,20,30];
//arr=10;
arr[3]=40;
//const 상수는 참조하는 데이터가 다른 데이터로 바뀌는 것을 막는다.
//하지만 참조하는 데이터가 다른데이터를 참조하는 것은 문제가 없다.
//js 개발자들은 변수가 동적타입인 것이 불편해서 배열을 상수로 많이 정의
console.log(arr);
arr[arr.length]=50; // 배열 마지막에 데이터 추가
console.log(arr)
arr.push(60,70,80);
console.log(arr);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr)
console.log(arr.shift()) //앞쪽 배열 제거
console.log(arr)
arr.unshift(0,1,2)
console.log(arr)

console.log(arr.splice(3,2,100,200))
console.log(arr)


const arr2=[1,2,3];
const arr3=[4,5,6];
let result= arr2+arr3;
console.log(result, typeof result)
//array 는 + 로 연산할 수 없다.
//concat 은 새로운 배열을 만든다
result=arr2.concat(arr3);
console.log(arr2)
console.log(result)
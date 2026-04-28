const arr=["사과","귤","레몬","오렌지"];
console.log(arr);
console.log(arr.splice(1,2,"배","체리"));
console.log(arr);
console.log(arr.slice(1,3));
console.log(arr); //slice는 특정 구간을 복제하기 때문에 기존 배열은 변화가 없다.
const arr2=arr.slice();
console.log(arr,arr2);
// 복제 : 동일한 데이터를 새롭게 생성, 복제하기 전의 데이터를 간섭하지 않아야함
const arr3=[...arr];
console.log(arr3)
arr2[3]="가지";
console.log(arr,arr2);

let str="안녕하세요!";
const arr4=Array.from(str);
console.log(str,arr4);
//String.split() : 원하는 문자열로 잘라내서 배열로 반환
console.log(str,str.split(""));
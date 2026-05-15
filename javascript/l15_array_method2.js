const arr=["사과","귤","레몬","오렌지"];
console.log(arr)
console.log(arr.splice(1,2,"배","체리"));
console.log(arr);
console.log(arr.slice(1,3));
console.log(arr); //slice 는 특정 구간을 복제하기 때문에 기존 배열은 변화가 없다
const arr2=arr.slice();
console.log(arr,arr2);
//복제 : 동일한 데이터를 새롭게 생성, 복제하기 전의 데이터를 간섭하지 않아야함
const arr3=["수박", ...arr, "망고"]; //스프레드
console.log(arr3)
arr2[3]= "가지";
console.log(arr, arr2);

let str="안_녕_하_세_요_!";
const arr4=Array.from(str);
console.log(str,arr4);
//String.split() : 원한는 문자열로 잘라내서 배열로 반환
console.log(str,str.split("_"));

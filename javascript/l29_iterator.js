//l29_iterator
//배열의 반복탐색
const arr=[10,20,30,40,50];
//인덱스(배열의 순서) 기반 반복문 (인덱스를 계산해서 데이터를 참조하기 때문에 느림)
for(let i=0; i<arr.length; i++){
    let num=arr[i];
    console.log(i,num);
}
//반복자 기반 반복문 (반복자가 next 로 이동하면 데이터를 참조하기 때문에 인덱스 기반보다 빠르다.)
for(let num of arr){
    console.log(num);
}
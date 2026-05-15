let n=10; //원시형 기본형 (데이터 1개뿐)
console.log(10.)
//console.log(true.)
// . 내부에 필드를 참조
let obj={
    a:"경민",
    b:40
}; //자료형 : 여러 데이터를 필드로 참조하는 데이터
console.log(obj.a);
console.log(obj.b);
obj = new Object();
obj.name="경민코딩";
obj.age=2;
console.log(obj.name);
console.log(obj.age);
console.log(obj);// { name: '경민코딩', age: 2 }
obj.o={
    fruit:["사과","귤"]
}
console.log(obj.o.fruit[1]);
//js 는 필드를 배열처럼 참조가능
console.log(obj["o"]["fruit"][1])
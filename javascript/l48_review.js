"use strict"
//l48_review

// this 바인딩 : 실행하는 객체가 this
// this 캡처 : 함수가 있는 위치의 타입이 this

class User{
    name="경민" //필드
    age=40;
    constructor(name,age) {
        this.name=name; // this 는 객체 자신
        this.age=age;
    }
    sayHi(){
        console.log(this)
    }
    hi=()=>{
        console.log(this)
    }
}
let u=new User("구찌",11);
//일반함수의 this 바인딩
u.sayHi();
let newSayHi=u.sayHi;
newSayHi();
//new User() : User > Object
//{}: Object
u.hi();
let newHi=u.hi;
newHi();

const helloFn=function(){
    console.log(this)
}

const member={
    id:1234,
    hello : helloFn
}
member.hello();
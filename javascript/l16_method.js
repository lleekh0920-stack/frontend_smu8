function sum(a,b,c){
    return a+b+c;
}

console.log(sum(10,20,30))

//함수는 호출해야 실행됨!
function multi(a,b,c,d){
    let result=a*b*c*d;
    console.log("a*b*c*d="+result);
}
multi();
multi(undefined,undefined,undefined,undefined);
multi(1,2,3,4);
multi(null,2,3,4);
multi("13","12","11","10");
multi("13","12","11","십");
//동일한 이름의 함수를 새로운 함수로 바뀐다.
//함수는 같은 이름의 함수가 오직한개가 존재하고 실행컨텍스트에 의해
//자바스크립트 실행전 전역에 선언되기 때문에 마지막에 선언된 함수로 바뀜
function multi(a,b,c){
    let result=a*b*c;
    console.log(result)
}

multi(1,2,3);
multi(1,2,3,4);
//매개변수의 기본값
function sum2(a,b,c=0,d=0){
    let result=a+b+c+d;
    console.log(result);
    //return result;
}
sum2(10,20,30,40);
sum2(10,20,30);
sum2(10,20);
let r=sum2(100,200,300,400);
console.log(r)
// 매개변수를 배열로 받기 (매개변수의 길이 제한이 사라짐)
function sum3(a,b,...args){
    console.log(args);
}
sum3();
sum3(1,2,3);
sum3(1,2,3,4,5);
const arr=[10,20,30]
arr.splice(1,1,21,22,23,24)
console.log(arr)


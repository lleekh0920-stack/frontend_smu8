
function sum(a,b,c){
    return a+b+c;
}

console.log(sum(10,20,30));

// 함수는 호출해야 실행됨!
function multi(a,b,c,d){
    let result=a*b*c*d;
    console.log("a*b*c*d= " + result)
}

multi();
multi(undefined,undefined,undefined,undefined);
multi(1,2,3,4);
multi(null,2,3,4);
multi("13","12","11","12");
multi("13","12","11","십");

//동일한 이름의 함수를 새로운 함수로 바뀐다.
function multi(a,b,c){
    let result=a*b*c;
    console.log(result)
}
multi(1,2,3)
multi(1,2,3,4)
//l66_async_return
function sum(a,b){
    return a+b;
}

console.log(sum(10,20));

async function sum2(a,b){
    return a+b;
}

console.log(sum2(10,20));
//Promise화에서 Promise 객체를 반환하지 않아야 할 때 사용
//Promise.resolve, Promise.reject
console.log(Promise.resolve(30));
let p=new Promise(resolve => {
    resolve(30)
}); // == Promise.resolve(30)
console.log(p);
//로그인 성공 ->조회, 로그인 실패 =>조회하지 않고 null
function request(url){
    return new Promise(resolve=>{
        console.log("통신성공");
        resolve("[]");
    })
}


function loadPost(isLogin){
    if(isLogin){
        return request("./getPosts.json")
    }else{
        return Promise.resolve(null);
    }
}//심각한 문제!
loadPost(true).then((res)=>{});
loadPost(false).then((res)=>{
    console.log(res)
});
//null.then(); => 오류
//async function은 Promise 객체를 다루기 때문에
//반환값으로 Promise.resolve()가 자동 반영

async function multi(a,b){
    return a*b;
}
multi(11,22).then((result)=>{
    console.log(result);
});
console.log("node 안녕");
//node 파일명
//node ./javasciprt/l07_var_scope.js
var a=10;
{
    var a=20;
}
console.log(a)
//window 브라우저 : 브라우저의 v8이 자바스크립트를
//실행할때 생성되는 전역객체
//node js로 script 를 실행하면 브라우저객체가 존재하지 않음
//console.log(window.a)

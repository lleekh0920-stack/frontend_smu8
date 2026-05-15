//l02_export
//export 를 해야 라이브러리(모듈)로 사용가능
function multi(a,b,c){
    return a*b*c;
}
// module.export= multi; // 모듈전체 == multi

module.export= {
    multi: multi
}
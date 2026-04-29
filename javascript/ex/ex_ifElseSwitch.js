/*
let score=80;
if (score>=90){
    console.log("A")
}else if(score>=80){
    console.log("B")
}else if(score>=70){
    console.log("C")
}else{
    console.log("F")
}

let grade;
switch (true){
    case (score>=90): grade="A"; break;
    case (score>=80): grade="B"; break;
    case (score>=70): grade="C"; break;
    default : grade="F"; break;
}
console.log(grade);
*/

let day=1;
let dayType="";
switch (day){
    case 0:console.log("일요일"); break;
    case 1:console.log("월요일"); break;
    case 2:console.log("화요일"); break;
    case 3:console.log("수요일"); break;
    case 4:console.log("목요일"); break;
    case 5:console.log("금요일"); break;
    case 6:console.log("토요일"); break;
    default :
        console.log("잘못된 입력")
}
console.log(dayType);
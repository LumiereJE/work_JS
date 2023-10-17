// let a, b, c;
let min, max;

let a = Number(prompt("첫번째 숫자 입력 : ", ""));
let b = Number(prompt("두번째 숫자 입력 : ", ""));
let c = Number(prompt("세번째 숫자 입력 : ", ""));

if(a > b) {
    if(a > c) max = a;
    else max = c;
} else {
    if(b > c) max = b;
    else max = c;
}
if(a > b) {
    if(b > c) min = c;
    else min = b;
} else {
    if(a > c) min = c;
    else min = a;
}

document.write("min : " + min, ", max : " + max);


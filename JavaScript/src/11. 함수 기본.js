/* 
함수 선언문 
: function키워드로 생성
: 호이스팅에 영향 받음 (어디에 있던, 끌어올려 져서 실행 가능함)
: 호출해야 실행 됨
*/

console.log(sum(10, 20));
console.log(sum(100, 200));

function sum(p1, p2) {
    return p1 + p2;
}




/*
함수표현식 
: 변수에 함수를 할당해서 사용하는 방식
: 호이스팅 적용 안됨.
: 네이밍함수 / 익명함수 둘 다 가능함
: 함수도 객체여서 대입이 가능한 구조임
*/
const gugudan = function() {
    for(let i = 1; i < 10; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
gugudan();

const gugudan9 = function(dan) {
    for(let i = 1; i < 10; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}
gugudan9(9);




/*
화살표 함수
: ES6에서 추가된 새로운 함수 선언 방법
: 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용 됨
*/

const gugudan5 = (dan) => {
    for(let i = 1; i < 10; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}
gugudan5(5);

const sum1 = (num1, num2) => {
    console.log(num1, num2);
    return num1 + num2;
}
sum1(10, 20);
sum1(10);  // 인수 갯수가 부족하게 들어가면 오류 안나는 대신, undefined 처리함




/*
기본값 할당 
: 매개변수의 수 만큼 전달하지 않아도 오류가 발생하지 않음
*/
const sum2 = (num1, num2 = 100) => num1 + num2;
console.log(sum2(10)); 



/*
스코프
: 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위
*/
//let a = 10;         // 전역 스코프
function sum3() {
    let a = 10;
    console.log(`함수 내부 : ${a}`);
}
sum3();
console.log(`함수 외부 : ${a}`);

var a = 10;
{
    var b = 20;
    console.log(`코드 블록 내부 a : ${a}`);
    console.log(`코드 블록 내부 b : ${b}`);
}
console.log(`코드 블록 외부 a : ${a}`);
console.log(`코드 블록 외부 b : ${b}`);



/*
참조 우선순위
: 
*/
let c = 10;
const d = 20;
function sum4() {
    let c = 50;         // 내부에 선언 하지 않으면, 밖에 선언된 것을 가져옴
    const d = 70;
    console.log(`함수 내부 c : ${c}`);
    console.log(`함수 내부 d : ${d}`);
}
sum4();


let e = 10;
let f = 20;
{
    let e = 10;
    let f = 40;
    console.log(`함수 내부 e : ${e}`);
    console.log(`함수 내부 f : ${f}`);
}




/*
즉시 실행 함수 
: 함수를 정의하자마자 바로 실행되는 함수
*/
(function() {
    init();
})();

function init() {
    console.log("초기화 루틴을 수행합니다.");
    let defaultUrl = "127.0.0.1";
    let defaultPort = "3030";

    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
}








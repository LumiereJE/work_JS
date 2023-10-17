// 자바 스크립트 한 줄 주석
/* 여러 줄 주석 */ 

/*
변수와 상수 : var, let, const
var : ES6 이전에 사용하던 변수 생성 문법. 중복 선언 가능, 재할당 가능 (호이스팅 - 변수를 끌어올림 (미친짓임))
let : ES6 이후 추가 됨. 변수 선언 문법, 자바의 변수 형태와 동일, 중복 선언 불가, 재 할당 가능
const : 상수 선언, 재할당 불가, ES6에서 추가
*/

let a = 100;
a = 200;    // 재할당
console.log(a);

// 함수식이 아래에 선언되어 있어도, 알아서 찾아옴 (함수는 끌어올림 ok)
console.log(sum(10, 20));       

function sum(x, y) {
    return x + y;
}

// 문자열 - '', "" 섞어서 사용해도 됨. 
let str = "문자열" + '연결 연산자 사용' + `백틱도 사용 가능`;
console.log(str);

let name1 = "제 이름은 '곰돌이 사육사' 입니다.";
let name2 = "제 이름은 \"곰돌이 사육사\" 입니다.";

// 템플릿 문자열 : `` (백틱)을 사용해서 만들며, ES6부터 추가 됨
let name = "곰돌이사육사";
let age = 23;
let addr = "경기도 수원시";

console.log(`저의 이름은 ${name}이고, 나이는 ${age}, 주소는 ${addr}입니다.`);

// 숫자형(Number) : 자바스크립트는 정수와 실수를 구분하지 않고 숫자형으로 취급함
let num1 = 10.1;
console.log(typeof(num1));      // typeof는 데이터 타입을 확인하는 함수
//let sum = 0.1 + 0.2;            // 부동 소수점은 근사치 계산을 하기때문에 정확한 정수값이 나오지 않음
console.log(sum);

// 논리형 : 참과 거짓 구분
let age1 = 20;
let isAdult = (age1 > 18) ? true : false;
if(isAdult) console.log("성인 입니다.");
else console.log("성인이 아닙니다.");

// undefined : 변수는 선언 되었지만 아직 값이 정해지지 않았음을 의미 (개발자가 대입하는 자료형이 아님)
let empty = undefined;
console.log(empty);

// null : 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워둘때 사용함
let empty2 = null;
console.log(empty2);

// undefined와 null을 묶어서 특수 자료형이라고도 함



/* 
객체(object) 
: 자바스크립트의 핵심 자료형 입니다.
: 기본 자료형을 제외하고 자바스크립트의 대부분의 자료구조는 객체로 이루어져 있음
: 객체 자료형은 배열, 객체 리터럴, 함수 등이 있음.

배열 
: 복수의 데이터를 정의할 수 있는 자료형

*/ 
let score = [80, 90, 100, 88];
console.log(score);
// 자바스크립트의 배열은 자바와 다르게 모든 자료형을 저장할 수 있음
let array = ["아이브", "안유진", 21, true, [100, 99, 88]];
console.log(array);
let array1 = [];

// 객체 리터럴 : 객체를 정의하는 가장 간단한 방법이며, 자바스크립트에서 가장많이 사용되는 문법
// 객체 리터럴은 키와 값의 한 쌍으로 구성, 중괄호를 이용해서 생성
// let score = [80, 90, 100, 88];
let score1 = {
    kor: 80,
    eng: 90,
    mat: 100,
    scn: 87,    // 마지막 순서여도 , 넣어 줘야 함
};
console.log(score1.kor);
console.log(score['mat']);

const person = {
    name2: "곰돌이 사육사",
    age: 22,
    addr: "경기도 수원시",
    info: function() {
        return `저의 이름은 ${this.name2}이고, 나이는 ${this.age}, 주소는 ${this.addr}입니다.`;
    }
}
console.log(person.info());

// toString() : 배열안의 모든 문자를 쉼표를 이용해 결합 후 출력
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());


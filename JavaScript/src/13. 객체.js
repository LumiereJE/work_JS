/*
객체
: 자바스크립트에서 원시타입(바로 값을 넣은 것)을 제외한 모든 값이 객체임
: 객체는 객체리터럴을 사용하여 만들며, 속성(property)과 값(value)의 쌍으로 구성

: 자바스크립트에서 객체를 만드는 방법은 
    - 객체 리터럴을 사용하는 방법 (간단하고 직관적임)
    - 클래스를 사용하는 방법 (굳이 사용 할 이유가 별로 없음)
*/

const person = {
    title: "지구오락실",
    name: "안유진",
    age: 21,
    job: "아이돌"
};

console.log(person);

// 객체 리터럴 또 넣기 가능
const person2 = {
    name: {
        firstName: "유진",
        lastName: "안"
    },
    age: 21, 
    isAdult: true,
    info: function() {
        return `이름 : ${this.name.lastName}${this.name.firstName}, 
        나이 : ${this.age}`;
    }
}
console.log(person2.info());
console.log(person2['name']);
console.log(person2['isAdult']);


// 속성 변경하기
person2.name.firstName = "Yujin";       // person2의 주소가 바뀐게 아니기 때문에, const임에도 정보가 바뀜
person2.name.lastName = "An";
console.log(person2.info());

// 객체 속성 동적으로 추가하기
const carInfo = {};
carInfo.name = "제네시스 GV80 쿠페";
carInfo.year = "2023/10/18";
carInfo.maxSpeed = "235km";
console.log(carInfo);

// 객체 리터럴 동적으로(실행중에) 삭제하기
delete carInfo.year;
console.log(carInfo);

// 객체 메소드 : 객체 내부에서 동작하는 함수. 
//              -> 프로퍼티에 저장된 값의 타입이 함수를 의미함
let person3 = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  person3.sayHello(); // 출력: 'Hello, my name is John.'



 // 생성자로 객체 생성하기
 // : 함수 이름이지만 객체를 생성하기 위해서 사용하기 때문에 첫자가 대문자임
 function Person(name, age, addr, job) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.job = job;
 } 

 const person11 = new Person("안유진", 21, "서울시 강남구 역삼동", "아이브");
 const person12 = new Person("장원영", 20, "서울시 강남구 청담동", "아이브");
 console.log(person11);
 console.log(person12);




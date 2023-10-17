// 비교연산자 
// 동등연산자 (==)
console.log(1 == "1");      // JS는 숫자와 문자가 같다는게 가능함
console.log(1 == true);
console.log(0 == false);

// 부등연산자
console.log(1 != "1");      
console.log(1 != true);
console.log(0 != false);

// 일치연산자 (===) : 두 값이 같은지를 비교하는데 데이터 타입도 합께 확인함
console.log(1 === "1");     
console.log(1 === true);
console.log(0 === false);

console.log(1 !== "1");      
console.log(1 !== true);
console.log(0 !== false);

// 형변환 : 묵시적/명시적 형변환
let num1 = 10 + "10";            // -> 묵시적 : 일단 문자열로 변환함
let num2 = 10 + Number("10");    // -> 명시적 
console.log(num1);

// 반복문 : while / do while / for / for-in / for-of
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
}

// 고객이 구입 가능한 음료 리스트 뽑기
let productList = [
    {
        name: "레쓰비", 
        price: 700
    }, 
    {
        name: "티오피", 
        price: 1000
    }, 
    {
        name: "비타500", 
        price: 800
    }, 
    {
        name: "포카리스웨트", 
        price: 1000
    }, 
    {
        name: "파워에이드", 
        price: 1200
    }
];

let inputCoin = 800;
let outputList = [];    // 빈 배열 생성

for(let i = 0; i <productList.length; i++) {
    if(productList[i].price <= inputCoin) {
        outputList.push(productList[i]);        // push : 값을 배열에 집어넣음, 배열의 마지막에 새로운 요소 추가함
    }
}
console.log(outputList);

// for-in : 객체의 프로퍼티를 열거하는데에 사용함
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

for(let key in person) {
    console.log(person[key]);       // key값을 이용해서 해당하는 값을 출력함
}

// for-of : 향상된 for문과 유사 (한바퀴 순회하는 느낌)
let brand = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let e of brand) {
    console.log(e);
}




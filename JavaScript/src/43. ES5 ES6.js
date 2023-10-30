/*

- forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행하는 메소드 입니다.
- map()     : 배열의 모든 요소를 순회면서 새로운 배열을 만듭니다.
- filter()  : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열을 만듭니다.
- reduce()  : 배열의 모든 요소를 순회하며, 순회 과정에서 누적값을 사용하여 하나의 결과값을 만듭니다.

*/

// forEach() 모든 요소를 순회
const numbers = [1,2,3,4,5,6,7];
numbers.forEach(e => console.log(e));


// map() 기존 배열 유지하면서 새로운 배열을 만들기
const squares = numbers.map(e=> e * e);
console.log(squares);


// filter() 내가 원하는 조건의 요소만 골라내서 배열로 만들기
const even = numbers.filter(e => e % 2 == 0);
console.log(even);


// reduce() 요소의 합을 누적시키면서 구하기 
const sum = numbers.reduce((total, e) => total + e, 0);
console.log(sum);


/*
전개연산자 : 
*/

const obj_1 = {x:1, y:2}
const obj_2 = {z:3, w:4}

const obj_3 = {...obj_1, ...obj_2};   // 각각의 요소를 풀어서 넣겠다 

console.log(obj_3);

function sum_1(...numbers) {
    return numbers.reduce((tot, e) => tot + e, 0);
}
console.log(sum_1(1,2,3,4,5,6,7,8,9));
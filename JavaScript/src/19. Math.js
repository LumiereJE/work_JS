/*
수학 연산을 다루는 Math객체
*/
console.log(Math.abs(-5));       // 출력: 5, 절대값
console.log(Math.ceil(1.1));     // 출력: 2
console.log(Math.floor(1.9));    // 출력: 1
console.log(Math.round(1.4));    // 출력: 1
console.log(Math.max(1, 2, 3));  // 출력: 3
console.log(Math.min(1, 2, 3));  // 출력: 1
console.log(Math.pow(2, 3));     // 출력: 8, 제곱을 반환
console.log(Math.sqrt(9));       // 출력: 3, 제곱근 반환
console.log(Math.random());      // 출력: 0 이상 1 미만의 임의의 수

// 1 ~ 10 까지의 임의의 수 생성
for(let i = 0; i < 100; i++) {
    console.log(Math.floor(Math.random() * 10 + 1));
};






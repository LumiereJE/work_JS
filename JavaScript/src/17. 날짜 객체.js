// 날짜와 시간을 다루는 Date 객체 
// 9시간 느림 (영국 기준임)
const date = new Date();
console.log(date);

// 이렇게 사용하면 헷갈림 - 달이 밀림
const date_1 = new Date(2022, 11, 27);
console.log(date_1);

// 새로운 날짜 셋팅하기
const date_2 = new Date("2022-12-25");
console.log(date_2);

const date_3 = new Date("2022/12/25/18:00:00");
console.log(date_3);


let myDate = new Date();
console.log(myDate.getFullYear());       // 현재 연도 출력
console.log(myDate.getMonth()+1);          // 현재 월 출력
console.log(myDate.getDate());           // 현재 날짜 출력
console.log(myDate.getDay());            // 현재 요일 출력
console.log(myDate.getHours());          // 현재 시간 출력
console.log(myDate.getMinutes());          // 현재 분 출력
console.log(myDate.getSeconds());        // 현재 초 출력
console.log(myDate.getTime());           // 1970년 1월 1일 자정부터 경과한 시간 출력












// 시간 정보(시간, 분)를 입력 받아 45분 일찍 설정하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력하기 `${}`
// parseInt()함수 필요 : 결과값을 정수로 반환
// 1. prompt를 사용해서 시간, 분 입력받기
// 2. 입력받은 시간을 분으로 환산, 45분 빼기
// 3. 만약 45분 뺀 시간이, 이전 날짜로 되는 경우는 24시간 만큼 더해주기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write() + 템플릿 문자열로 출력

let hour = prompt("시간 입력") * 60;
let minutes = prompt("분 입력");
let time;

time = (hour + minutes - 45);
hour = (time / 60);
minutes = parseInt(time % 60);

// if(hour > 24) {
//     hour + 24;
// }

document.write(`알람이 ${hour}시 ${minutes}분에 설정 되었습니다.`);


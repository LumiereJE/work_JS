const currentYear = 2023;
let birthYear;
let age;

birthYear = prompt("태어난 연도를 입력하세요(yyyy) : ");
age = currentYear - birthYear;
document.write(currentYear + "년 현재 <br>");    // web 화면에 기록하기 -> 빈 화면일때 씀. HTML있으면 안씀
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "살 입니다.");
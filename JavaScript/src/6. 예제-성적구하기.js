/* 
성적을 입력받아 학점 출력하기
- 0 ~ 100점 사이가 아니면 입력 오류 출력
- 90점 이상 A, 80점 이상 B, 70점 이상 C,  60점 이상 D, 나머지 F 처리
*/

let score = Number(prompt(" (　o=^•ェ•)o　┏━┓ 점수 입력 : "));


if(score >= 90) {
    document.write("<p class='score'>¯\_( ͡° ͜ʖ ͡°)_/¯ A</p>");
} else if (score >= 80) {
    document.write("<p class='score'>¯\_( ͡° ͜ʖ ͡°)_/¯ B</p>");
} else if (score >= 70) {
    document.write("<p class='score'>¯\_( ͡° ͜ʖ ͡°)_/¯ C</p>");
} else if (score >= 60) {
    document.write("<p class='score'>¯\_( ͡° ͜ʖ ͡°)_/¯ D</p>");
} else {
    document.write("<p class='score'>¯\_( ͡° ͜ʖ ͡°)_/¯ E</p>");
}


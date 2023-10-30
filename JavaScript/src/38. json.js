const memberInfo = [
    {
        name: "이영지",
        age: 22,
        job: "래퍼",
        addr: "서울시 강남구 청담동",
    },
    {
        name: "미미",
        age: 25,
        job: "오마이걸",
        addr: "서울시 강남구 역삼동",
    },
    {
        name: "안유진",
        age: 21,
        job: "아이브",
        addr: "서울시 강북구",
    },
];
// 자바 스크립트 객체를 JSON 문자열로 변환
// key도 ""안에 들어가게 됨
// 직렬화 때문에 줄글 형식으로 나열 됨 
const json = JSON.stringify(memberInfo);
console.log(json);

// json 문자열을 자바스크립트 객체로 변환
let objectJson = JSON.parse(text);
console.log(objectJson);
// const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // POST방식, HTTP Method, URL 정의
// xhr.setRequestHeader("content-type", "application/json"); // 헤더값의 content-type 정의

// const data = {
//     id : 100,
//     title :"XMLHttpRequest 전송하기",
//     author : "곰돌이사육사"
// };

// xhr.send(JSON.stringify(data)); // JSON.stringify를 통해 오브젝트를 문자열 형태로 변경해서 전송

// xhr.onload = () => {
//     if(xhr.status === 201) {
//         const res = JSON.parse(xhr.response);
//         console.log(res);
//     } else {
//         console.error(xhr.status, xhr.statusText);
//     }
// };


const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // GET방식, HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json"); // 헤더값의 content-type 정의

const data = {
    id : 100,
    title :"XMLHttpRequest 전송하기",
    author : "곰돌이사육사"
};

xhr.send(); // 단순 조회 

xhr.onload = () => {
    if(xhr.status === 200) {
        const res = JSON.parse(xhr.response);
        console.log(res);
    } else {
        console.error(xhr.status, xhr.statusText);
    }
};






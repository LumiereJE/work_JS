function newRegister() {
    // #subject에 li요소 추가할거임
    let newItem = document.createElement("li"); 
    let subject = document.querySelector("#subject");
    newItem.innerHTML = subject.value;

    // #itemList의 자식중 첫번째 앞에 추가할거임
    let itemList = document.querySelector("#itemList");
    itemList.insertBefore(newItem, itemList.childNodes[0]);

    // input입력창 초기화 
    subject.value = "";
    let items = document.querySelectorAll("li");
    for (i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            // 부모 노드가 있으면, 삭제 (addEventListener는 화살표 함수는 적용안됨)
            if(this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });
    }



}
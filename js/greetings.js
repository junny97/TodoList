const loginForm = document.querySelector("#login-form"); //로그인 창 
const loginInput = document.querySelector("#login-form input");// 로그인 정보입력
const greeting =document.querySelector("#greeting"); // 로그인시 사용자의 이름 출력

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault(); // 페이지의 새로고침을(브라우저의 기본동작)막는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paingGreeting();
   
}



function paingGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    const date1 = new Date();
    const Hours = String(date1.getHours()).padStart(2, "0");
    if(Hours<=12){
            greeting.innerText ="Good morning! "  + username;
            greeting.classList.remove(HIDDEN_CLASSNAME);
            }

    else if(Hours>12 && Hours<=18) {
        greeting.innerText ="Good afternoon! "  + username;
    }
    else{
        greeting.innerText ="Good evening! "  + username;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paingGreeting();
}

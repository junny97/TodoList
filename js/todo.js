const toDoForm = document.querySelector("#todo-form");
const toDoList =document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input"); 

const TODOS_KEY = "todos";
let toDos = [];

function savetoDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // toDo.id는 문자열이고 li.id는 스트링이라 삭제되지 않음 삭제하려면 parseint로 문자열로 전환 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    savetoDos();    
}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubimt(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 값을 새로운 변수 newTodo에 저장
    toDoInput.value = ""; //newTodo에 저장한 값은 새로운 변수값이라 벨류값이 사라져도 문제없ㄷ음
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savetoDos();
}

toDoForm.addEventListener("submit", handleToDoSubimt);


const saveToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos); 
if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo); // forEach는 각각의 배열을 실행시킴
}
const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY = 'todos';
let toDos = [];

function savetoDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savetoDos();
}

function editToDo(event) {
  const li = event.target.parentElement;
  const todoText = li.querySelector('span').innerText;
  const newText = prompt('Edit the to-do item:', todoText);

  if (newText !== null) {
    if (newText.trim() !== '') {
      // Check if the newText is not empty or contains only spaces
      li.querySelector('span').innerText = newText;
      const todoId = parseInt(li.id);
      toDos = toDos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, text: newText };
        }
        return todo;
      });
      savetoDos();
    } else {
      alert('오늘의 할 일 수정사항을 입력해 주세요!');
    }
  }
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  li.classList.add('todo-item');

  const span = document.createElement('span');
  span.innerText = newTodo.text;

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.classList.add('todo-button');
  editButton.addEventListener('click', editToDo);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.classList.add('todo-button');
  deleteButton.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  toDoList.appendChild(li);
}

function handleToDoSubimt(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savetoDos();
}

toDoForm.addEventListener('submit', handleToDoSubimt);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

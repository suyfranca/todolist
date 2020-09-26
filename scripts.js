(function () {
  let todoItens = [];
  const form = document.querySelector('.js-form');

  function addTodo(text) {
    const todo = {
      text: text,
      checked: false,
      id: Date.now(),
    };

    todoItens.push(todo);
    return todo;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('.js-todo-input');
    const text = input.value.trim();

    if (text != '') {
      let current_todo = addTodo(text);
      input.value = '';
      input.focus();
      renderTodo(current_todo);
    }

    console.log(todoItens);
  });

  function renderTodo(todo) {
    let list = document.querySelector('.js-todo-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `<span">${todo.text}</span>`;
    list.append(listItem);
  }
})();

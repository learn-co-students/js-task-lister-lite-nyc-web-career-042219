document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const task = document.querySelector('#new-task-description');
  const tasks = document.querySelector('#tasks');
  const createToDo = document.querySelector('#createToDo');
  const priority = document.querySelector('#priority-select');

  createToDo.addEventListener('click', function (event) {
    event.preventDefault()
    const line = document.createElement('li')
    line.innerText = task.value
    line.className = priority.value
    // debugger
    const button = document.createElement("button");
    button.innerText = 'x'
    tasks.appendChild(line);
    line.appendChild(button);
    form.reset();
    button.addEventListener('click', function (event) {
      line.remove()
    })
  });
});

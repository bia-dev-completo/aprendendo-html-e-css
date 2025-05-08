const button = document.querySelector('button');

button.addEventListener('click', () => {
  const tasksList = document.querySelector('.tasksContainer');
  const input = document.querySelector('input');
  const newTask = document.createElement('li');
  newTask.innerText = input.value;

  if (input.value)
    tasksList.appendChild(newTask);
  input.value = '';
});
export default function createTaskElement(todo){

  let taskElement = document.createElement('li');
  let task = document.createElement('input');
  let threedotsContainer = document.createElement('div');
  let check = document.createElement('input');
  let threedots = document.createElement('i');
  threedots.classList.add('fa-solid','fa-ellipsis-vertical');

  const description = todo;

  task.type = 'text';
  task.value = description;
  task.classList.add("todo");
  
  check.type = 'checkbox'
  check.classList.add('status');

  threedotsContainer.appendChild(threedots)
  threedotsContainer.classList.add('dragRemoveContainer', 'flex')

  taskElement.appendChild(check);
  taskElement.appendChild(task);
  taskElement.appendChild(threedotsContainer);

  return taskElement;
}
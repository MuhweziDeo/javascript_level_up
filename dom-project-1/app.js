const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load event listeners
loadEventListeners();

function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);
    // remove task
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearbtn.addEventListener('click', clearTasks);
    // filter tasks events
    filter.addEventListener('keyup', filterTasks);

};

function addTask(e) {
    if (taskInput.value === '') {
        alert('add task');

    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = ' delete-item secondary-content';
    link.innerHTML = '<i class=" fa fa-remove"> </i>';
    li.appendChild(link);

    taskList.appendChild(li);
    taskInput.value = "";
    e.preventDefault();
}

// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are u sure')) {
            e.target.parentElement.parentElement.remove();
        }
        console.log(e.target)
    };

};

//  clear tasks

function clearTasks(){
    // taskList.innerHTML='';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);

    }
};

// filter tasks

function filterTasks(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item=task.firstChild.textContent;
            if(item.toLowerCase.indexOf(text) != -1){
                task.style.display ='block';
            } else{
                task.style.display='none';
            }
        }
    );

}
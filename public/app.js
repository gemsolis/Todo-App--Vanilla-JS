
// Add Variables Here
const taskForm = document.querySelector('.input-form');
const taskButton = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');
const dateValue = document.querySelector('.date-value');
const timeValue = document.querySelector('.time-value');
const filterOption = document.querySelector('.filter-list')



// Add Event Listeners Here

taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTask);

// Add Functions Here

function addTask(event){
        event.preventDefault();
        const taskDiv = document.createElement('div');
        const newTask = document.createElement('li');

                
        taskDiv.classList.add('task');
        newTask.innerHTML= taskForm.value;

        const dateTimeDiv = document.createElement('div');
        dateTimeDiv.classList.add('date-time')

        const addDate = document.createElement('li');
        const addTime = document.createElement('li');
        addDate.innerHTML= dateValue.value;
        addDate.classList.add('date');
        addTime.innerHTML=timeValue.value;
        addTime.classList.add('time');

        dateTimeDiv.appendChild(addDate);
        dateTimeDiv.appendChild(addTime);
        taskDiv.appendChild(dateTimeDiv);


        newTask.classList.add('task-item');
        taskDiv.appendChild(newTask);

    


        const completedButton = document.createElement('button');
        completedButton.innerHTML='<i class="fas fa-check"></i>';
        completedButton.classList.add('completed-btn');
        taskDiv.appendChild(completedButton);

    
        const trashButton = document.createElement('button');
        trashButton.innerHTML='<i class="fas fa-trash-alt"></i>';
        trashButton.classList.add('trash-btn');
        taskDiv.appendChild(trashButton);
    
        taskList.appendChild(taskDiv);
        taskForm.value="";
   
}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] == 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('deletefall');
        todo.addEventListener('transitionend', function(){
        todo.remove();
        })

    }


    if(item.classList[0] == 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');

    }

    
}



function filterTask(e) {
    const tasks = taskList.childNodes;
    tasks.forEach(function (task) { 
        const mStyle = task.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (task.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "incomplete":
                    if (task.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}









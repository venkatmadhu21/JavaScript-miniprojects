const add =document.getElementById('add');
const taskInput=document.getElementById("taskInput");
const tasklist=document.getElementById("tasklist");

add.addEventListener('click',function(){
    const task=taskInput.value;
    if(task){
        const li=document.createElement('li');
        li.innerText=task;
        tasklist.appendChild(li);
        taskInput.value="";
    }
}
);

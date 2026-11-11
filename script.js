let tasks = [
    {
        id: 1,
        title: "Apprendre JavaScript",
        description: "Réviser les tableaux et les objets",
        completed: false
    },
    {
        id: 2,
        title: "Créer une page HTML",
        description: "Utiliser les éléments HTML5",
        completed: true
    },
    {
        id: 3,
        title: "Manipuler le DOM",
        description: "Créer et supprimer des éléments",
        completed: false
    }
];
const  titleInput = document.getElementById('title')
const descriptionInput=document.getElementById('description')
const submitBtn=document.getElementById('submitBtn')
const taskForm = document.getElementById('taskForm')
const tasksContainer=document.getElementById('tasksContainer')
let deleteBtns = document.querySelectorAll(".deleteBtn")




function displayTasks(){
    tasksContainer.innerHTML = ""
    for (let i=0 ;i<tasks.length;i++){

        tasksContainer.innerHTML+=`<div>
        <h3>${tasks[i].title}</h3>
        <p>${tasks[i].description}</p>
        <p>${tasks[i].completed ? "Terminée" : "En cours"}</p>
        <button class="editBtn">Modifier</button>
        <button class="deleteBtn" data-id="${tasks[i].id}">Supprimer</button>
        </div>`
        
    }
}

taskForm.addEventListener('submit',function(e){
    e.preventDefault()
    if(titleInput.value == ""||descriptionInput.value == ""){
        alert('votre input est vide!')
        return
    }
    let task = {
        id:tasks.length + 1,
        title:titleInput.value,
        description:descriptionInput.value,
        completed:false
    }
    tasks.push(task)
    titleInput.value = ""
    descriptionInput.value = ""
    displayTasks()
})




function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    displayTasks();

}

deleteBtns.forEach(btn => {

    btn.addEventListener("click", function() {

        let id = Number(btn.dataset.id)

        deleteTask(id)

    });

});



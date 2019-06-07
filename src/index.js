document.addEventListener("DOMContentLoaded", () => {
  // your code here, grab 


    //all neccessary dom elements 
    const taskForm = document.querySelector("#create-task-form")
    const taskInput = document.querySelector("#new-task-description")
    const taskList = document.querySelector("#tasks")


    //event listener for delete
    taskList.addEventListener('click',event => {
      if(event.target.dataset.action === 'delete') {
        event.target.parentNode.remove()
      }
    })

    //Event listener, listen for form to submit
    //attach event listeners
    taskForm.addEventListener('submit', event => {
    console.log("clicking submit") 
    event.preventDefault()
    

    //save input 
    const taskDescription = taskInput.value 
    console.log('task description is:',taskDescription)

    //create a dom element(li tag)
    const taskLi = document.createElement('li')
    taskLi.innerText = taskDescription

    //create a delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    deleteButton.dataset.action = 'delete'
    //append to the task
    taskLi.appendChild(deleteButton)

    //listen for click 
    deleteButton.addEventListener('click', () => {
      console.log('clicked x')
      //remove the task
      taskLi.remove()
    })
    

    taskList.appendChild(taskLi)
    taskForm.reset()
    })

});


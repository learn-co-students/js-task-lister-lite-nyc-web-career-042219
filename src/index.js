document.addEventListener('DOMContentLoaded', () => {
  // Load DOM elements at the top so we can have access to them later
    //find the form that we want to manipulate
  const form = document.querySelector('#create-task-form')
    // find the input that we will be listening to
  const input = document.querySelector('#new-task-description')
    // find where the tasks are going to added to
  const list = document.querySelector('#tasks')
    // find where priorty is being selected to assign its value to a color
  const prioritySelect = document.querySelector('#priority-select')

  // Event Listners/ listen for form submit
  list.addEventListener('click', (e) => {

    // test the event click
    // console.log('click inside the task')
    // only log the event target
    // console.log(e.target)
    // create a conditinal that determnes if the event target is the delete button by checking its class name and comparing to what we assign it
    // dataset.action is more specific category for the delete button
    if (e.target.dataset.action === 'delete') {
      // delete the node! in this case its the parent
      // console.log(e.target.parentNode) to check if the delete button corresponds the Li as the parent tha we want to delete
      // e.target.parentNode.remove()
      // !!!! get the task description
          const buttonDescription = e.target.dataset.description
          // // !!!! get Li bsed on that description and remove it
          const liToRemove = document.querySelector(`li[data-description="${buttonDescription}"]`)
          // console.log(liToRemove)
          liToRemove.remove()

    }

  })
  form.addEventListener('submit', (e) => {
    // console.log('submit confirmation')
    // console log the event listener to confirm that we are capturing the correct event
    e.preventDefault()
    // debugger
    // set the value of priority-task
    const colorValue = prioritySelect.value
    // debugger
    // preventDefault used to stop the page from reloading after the submit, confirmed by the page quickly reloading our console.log('submit confirmation')
    const taskDescription = input.value
    // console.log('td :', taskDescription)
    // console log the submit event to confirm that we are capturing the correct value

    const taskLi = document.createElement('li')
    // assign the taskLi a color
    taskLi.style.color = colorValue
    // assign the 'li' a value, which is the input of the taskDescription (set as a variable)
    taskLi.innerText = taskDescription
    // assing the Li as dataset.description that will match the dataset.description of its child
    // that we have a direct association of the two
    taskLi.dataset.description = taskDescription
    //  create a delete but with new 'li ' task
    // debugger
    const deleteButton = document.createElement('button')
    // set the text for the button
    deleteButton.innerText = 'delete me'
    // set a dataset.action for the button so we can have a eventlistner on it
    // data attributes they are not going to represent themselves to the user, if you're using a class it means that this button could use some CSS. Dataset. is used to JS to access
    // dataset-action gives a you key value pairs
    // the key is assign after 'data-'
    deleteButton.dataset.action = 'delete'
    // assing the button as dataset.description that will match the dataset.description of its parent
    deleteButton.dataset.description = taskDescription
    taskLi.appendChild(deleteButton)
    // debugger
    // priorityColor(priortySelect, taskLi)
    // This way works but its not ideal to create a eventListener everytime a button is create convention, use event delegation VVVVVVVVV
          //listen for a click of the delete deleteButton
          // deleteButton.addEventListener('click', (e) => {
          //   taskLi.remove()
          // })
    // append the 'li' to the list found in the html file under the div id ="list" and its ul child id "tasks"

    list.appendChild(taskLi)
    form.reset()
  })

});

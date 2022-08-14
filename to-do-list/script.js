let todos = [{ title: 'Sample1', due: '2022-9-1', id: 'id1' }]
render()

function deleteTodo(event) {
  const deleteButton = event.target
  const idToDelete = deleteButton.id

  todos = todos.filter(function (todo) {
    if (todo.id === idToDelete) {
      return false
    } else {
      return true
    }
  })
  render()
}
function addTodo() {
  let textbox = document.getElementById('todo-title')
  let title = textbox.value
  const timePicker = document.getElementById('time-picker')
  const due = timePicker.value
  const id = '   ' + new Date().getTime()
  todos.push({ title: title, due: due, id: id })
  render()
}
function render() {
  document.getElementById('todo-list').innerHTML = ''

  todos.forEach(function (todo) {
    //for loop gibi
    let element = document.createElement('div')
    element.innerText = todo.title + '  ' + todo.due
    element.style =
      'padding:30px; color: rgb(80, 18, 181, 0.6);; border-bottom:2px solid #d0d0d0'

    const deleteButton = document.createElement('button')
    deleteButton.className = 'button3'
    deleteButton.innerText = ' '
    deleteButton.style = 'margin-left:100px'
    deleteButton.onclick = deleteTodo
    deleteButton.id = todo.id
    element.appendChild(deleteButton)
    let todoList = document.getElementById('todo-list')
    todoList.appendChild(element)
  })
}

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


let itemCount = 0
let uncheckedCount = 0
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // alert('New TODO button clicked!')
  const container = document.createElement('div')
  const text = document.createElement('li')
  const checkbox = document.createElement("input")
  const del = document.createElement('button')


  container.className = 'todo-container'
  text.className = 'todo-text'
  checkbox.className = 'todo-checkbox'
  del.className = 'todo-delete'

  del.innerHTML = 'Delete'

  checkbox.setAttribute('type','checkbox')


  const input = prompt("Enter New Task")


  if(input != null && input.length > 0)
  {
      itemCount++
      uncheckedCount++
      
      text.innerHTML = input
      container.appendChild(checkbox)
      container.appendChild(text)
      container.appendChild(del)
      list.appendChild(container)

      itemCountSpan.innerHTML = itemCount
      uncheckedCountSpan.innerHTML = uncheckedCount
  }

}

list.addEventListener("click", function(event) {
  if(event.target && event.target.nodeName == 'INPUT')
  {
      if(event.target.checked == true)
      {
          uncheckedCount--
      }
      else 
      {
          uncheckedCount++
      }
  }
  else if(event.target && event.target.nodeName == "BUTTON")
  {
      const parent = document.getElementById('todo-list')
      const x = event.target.parentNode.getElementsByTagName('input') 
      if(x[0].checked == false)
      {
         uncheckedCount--
      } 
      itemCount--
      parent.removeChild(event.target.parentElement)
  }
    itemCountSpan.innerHTML = itemCount
    uncheckedCountSpan.innerHTML = uncheckedCount
})


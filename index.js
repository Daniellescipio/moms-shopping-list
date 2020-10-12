
var submitButton = document.getElementById("submit")
submitButton.addEventListener("click", function addItem(){
    var input = document.getElementsByClassName("input")
    var listContainer = document.getElementById("list")
    var newItem = document.createElement("li")
    newItem.setAttribute('class', 'new-item')
    console.log(newItem)
    newItem.textContent = input[0].value
    listContainer.append(newItem)
    Event.preventDefault
    var deleteButton = createDeleteButton(Event)
    newItem.append(deleteButton)
    var editButton = createEditButton(Event)
    newItem.append(editButton)
    
}
)

function createDeleteButton(){
    var deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", function dlete(){
        deleteButton.parentElement.style.display = 'none'
    })
    return deleteButton
    

}

function createEditButton(){
    var editButton = document.createElement("button")
    editButton.setAttribute('type', 'submit')
    editButton.textContent = "EDIT"
    var editBox = document.createElement("input")
    editBox.setAttribute('type', 'text')

    editButton.addEventListener("click", function edit(){
        newItem = document.getElementById('new-item')
        newItem.append(editBox)

        editButton.textContent = "Save"
      
        editButton.addEventListener("click", function save(){
            newItem = document.getElementsById('new-item')
            newItem.textContent = editBox.value
            var deleteButton = createDeleteButton(Event)
            newItem.append(deleteButton)
            var editButton = createEditButton(Event)
            newItem.append(editButton)
            
         })

    })
    return editButton
}
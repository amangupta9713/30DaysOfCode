function addToList() {
    if(document.getElementById('myInput').value == "") {
        window.alert('please fill something');
        return false;
    }
    let taskListItem = document.createElement('li'); // create a element li and stored a var
    let task = document.getElementById('myInput').value; // input field value store in variable by the getElementById

    // create task node
    let taskSpan = document.createElement('span'); // for element span
    taskSpan.innerText = task; // for element span input text value
    // let taskSpan = document.createTextNode(task); // input field value(text) store in var

    // call all functions
    let rowElemnets = createListItemElements(taskSpan); // stored a value of all buttons
    bindEvents(rowElemnets); // bind all click events and pass param row elements (all buttons)
    
    taskListItem.appendChild(taskSpan);  // li element append input value text
    taskListItem.appendChild(rowElemnets.editContainer); // rowElemnets define objects and in row elments deine all buttons
    taskListItem.appendChild(rowElemnets.editButton);
    taskListItem.appendChild(rowElemnets.saveButton);
    taskListItem.appendChild(rowElemnets.cancelButton);
    taskListItem.appendChild(rowElemnets.removeButton); // remove btn append with li
    let textList = document.getElementById('myList'); // my List(ul) define and store in var by the getElementById
    textList.appendChild(taskListItem); // li appends in ul list
    document.getElementById("myInput").value = ""; // after add any text tha placeholder get clear.
}

function createListItemElements(taskSpan) {
    let removeButton = buildRemoveButton();
    let editContainer = buildEditContainer(taskSpan);
    let saveButton = buildSaveButton();
    let cancelButton = buildCancelButton();
    let editButton = buildEditButton();

    return {
        removeButton,
        editContainer,
        saveButton,
        cancelButton,
        editButton
    }
}

function bindEvents({removeButton, editContainer, saveButton, cancelButton, editButton}) {
    removeButton.onclick = function(event) {  // remove list function
        // taskListItem.remove(); // use 'closure' (remove here without call the function)
        event.target.parentElement.remove();
    }
    editButton.onclick = function(event) {
        editContainer.style.display = "inline-block";
        event.target.parentElement.querySelector('span').style.display = 'none';
        saveButton.style.display = "inline-block";
        cancelButton.style.display = "inline-block";
        editButton.style.display = "none";   
    }
    saveButton.onclick = function(event) {
        if(!event.target.parentElement.querySelector('input').value) {
            window.alert('please fill something');
            return false;
        }

        event.target.parentElement.querySelector('span').innerText = editContainer.value; // stored value of edit container
        editContainer.style.display = "none";
        event.target.parentElement.querySelector('span').style.display = 'inline-block';

        cancelButton.style.display = "none";
        saveButton.style.display = "none";
        editButton.style.display = "inline-block";
    }
    cancelButton.onclick = function(event) {
        editContainer.value = event.target.parentElement.querySelector('span').innerText;
        editContainer.style.display = "none";
        event.target.parentElement.querySelector('span').style.display = 'inline-block';
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        editButton.style.display = "inline-block";
    }
}

function buildEditContainer(taskSpan) {
    let editContainer = document.createElement('input');
    editContainer.value = taskSpan.innerText; // 
    editContainer.style.display = "none";

    return editContainer;
}
// remove button
function buildRemoveButton() { // Remove Function
    let removeButton = document.createElement('button'); // create a element button and stored a var
    removeButton.innerHTML = 'Remove'; // button element give the name
    // removeButton.id = 'removeTask'; // button element define the ID

    return removeButton;
}
// edit button
function buildEditButton() {
    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    // editButton.id = 'editTask';

    return editButton;
}
// save button
function buildSaveButton() {
    let saveButton = document.createElement('button');
    saveButton.innerHTML = 'Save';
    saveButton.style.display = "none";

    return saveButton;
}
// cancel button
function buildCancelButton() {
    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.style.display = "none";

    return cancelButton;
}
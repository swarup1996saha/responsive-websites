let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragrapgh = document.createElement('p');
    paragrapgh.classList.add('paragraph-styling');
    paragrapgh.innerText = inputField.value;
    toDoContainer.appendChild(paragrapgh);
    inputField.value='';
    paragrapgh.addEventListener('click', function(){
        paragrapgh.style.textDecoration = "line-through"
    })
    paragrapgh.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragrapgh);
    })
})
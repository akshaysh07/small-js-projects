const addList = document.getElementById("addList");



const todoContainer = document.getElementById("todoContainer");

const inputField = document.getElementById("inputField");



addList.addEventListener("click", () => {
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    
    paragraph.innerText = inputField.value;
    
    inputField.value = "";
    todoContainer.appendChild(paragraph);
    
    
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "-";
    paragraph.appendChild(deleteButton);
    
    deleteButton.addEventListener("click", () => {
        paragraph.remove();
    });
});


 
      

     



let inputBox = document.getElementById("inputBox");
let listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputBox.value == ''){
      alert("Please enter a task first..");
    }else{
        let createList = document.createElement("li");
        listContainer.innerText = inputBox.value;
        listContainer.appendChild(createList);

        
        let closeIcon =  document.createElement("img");
        closeIcon.src = "assets/closeIcon.png";
        createList.appendChild(closeIcon);
    }
    inputBox.value = '';
}
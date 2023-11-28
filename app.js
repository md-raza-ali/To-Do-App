let inputBox = document.getElementById("inputBox");
let list = document.getElementById("list");

function addTask() {
  if (inputBox.value.trim() == "") {
    alert("Please enter a task first..");
  } else {
    // Creating li
    let createli = document.createElement("li");
    createli.innerText = inputBox.value;
    list.appendChild(createli);

    // Creating img
    let closeIcon = document.createElement("img");
    closeIcon.src = "./assets/closeIcon.png";
    createli.appendChild("closeIcon");
  }
  inputBox.value = "";
}

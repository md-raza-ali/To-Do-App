let = document.getElementById("inputBox");
let list = document.getElementById("list");
let addBtn = document.getElementById("addBtn");
let editedLi = null;

let saveBtn = document.getElementById("saveBtn");
saveBtn.style.display = "none";
let dltBtn = document.getElementById("dltBtn");
dltBtn.style.display = "none";

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task first..");
  } else {
    // Creating li
    let createLi = document.createElement("li");
    createLi.innerText = inputBox.value;
    list.appendChild(createLi);

    // Creating Cancel button in Li
    let closeBtn = document.createElement("button");
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    createLi.appendChild(closeBtn);

    // Creating Edit button in Li
    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-solid fa-edit"></i>`;
    createLi.appendChild(editBtn);

    // Styling
    createLi.setAttribute("class", "parent");
    closeBtn.setAttribute("class", "right-btn-img-close");
    editBtn.setAttribute("class", "right-btn-img-edit");

    closeBtn.addEventListener("mouseover", function () {
      closeBtn.style.color = "red";
    });
    closeBtn.addEventListener("mouseout", function () {
      closeBtn.style.color = "black";
    });
    editBtn.addEventListener("mouseover", function () {
      editBtn.style.color = "#8e2de2";
    });
    editBtn.addEventListener("mouseout", function () {
      editBtn.style.color = "black";
    });

    // Click event to remove Li
    closeBtn.addEventListener("click", function () {
      createLi.remove();
    });

    // Click event to edit Li
    editBtn.addEventListener("click", function () {
      let editText = createLi.childNodes[0].nodeValue;
      inputBox.value = editText;
      editedLi = createLi;

      saveBtn.style.display = "inline-block";
      addBtn.style.display = "none";
      dltBtn.style.display = "none";

      
    });

    // Click event to save Li
    saveBtn.addEventListener("click", function () {
      editedLi.childNodes[0].nodeValue = inputBox.value;

      saveBtn.style.display = "none";
      addBtn.style.display = "inline-block";
      inputBox.value = "";
    });

    // Click event for showing completion of task
    createLi.addEventListener("click", function () {
      if (
        createLi.childNodes[0].nodeValue.style.textDecoration !== "line-through"
      ) {
        createLi.style.textDecoration = "line-through";
      } else {
        createLi.style.textDecoration = "none";
      }
    });
  }
  // Reset inputBox value
  inputBox.value = "";
}

// function saveData(){
//   localStorage.setItem("data", list.innerHTML);
// }
// function showTask(){
//   list.innerHTML = localStorage.getItem("data");
// }
// showTask()

// Delete all button
// function deleteAll() {
//   // Get a reference to the todoList element
//   list = document.getElementById("list");

//   // Loop through each child of the todoList and remove it
//   while (list.firstChild) {
//     list.removeChild(list.firstChild);
//   }

//   // Hide the deleteAllBtn
//   dltBtn.style.display = "none";
// }

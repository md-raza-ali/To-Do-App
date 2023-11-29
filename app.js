let inputBox = document.getElementById("inputBox");
let list = document.getElementById("list");
let editedLi = null;
let saveBtn = document.getElementById("saveBtn");
saveBtn.style.display = "none";

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task first..");
  } else {
    // Creating li
    let createLi = document.createElement("li");
    createLi.innerText = inputBox.value;
    list.appendChild(createLi);

    // Creating Cancel button
    let spanClose = document.createElement("span");
    spanClose.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    createLi.appendChild(spanClose);

    // Creating Cancel button
    let spanEdit = document.createElement("span");
    spanEdit.innerHTML = `<i class="fa-solid fa-edit"></i>`;
    createLi.appendChild(spanEdit)
     
    // Styling Li
    createLi.setAttribute("class", "parent");
    spanClose.setAttribute("class", "right-span-img-close");
    spanEdit.setAttribute("class", "right-span-img-edit");

    // Click event to remove Li
    spanClose.addEventListener("click", function(){
      createLi.remove()
    })

    // Click event to edit Li
    spanEdit.addEventListener("click", function(){
      let edit = createLi.childNodes[0].nodeValue;
      inputBox.value = edit;
      editedLi = createLi;
      // saveBtn.style.display = "inline-block";
      // let addBtn = document.getElementById("addBtn");
      // addBtn.style.display = "none";

      
    })
    
  }
  inputBox.value = "";
}

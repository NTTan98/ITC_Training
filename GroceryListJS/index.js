let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let list = document.getElementById("list");
let listItems = [];
//save list to local storage
let saveList = () => {
  localStorage.setItem("list", JSON.stringify(listItems));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
  renderList();
  saveList();
});
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    msg.innerHTML = "";
    listItems.push(input.value);
    console.log(listItems);
  }
  input.value = "";
};
let renderList = () => {
  list.innerHTML = "";
  for (let i = 0; i < listItems.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = listItems[i];
    //li value is the same as the index
    li.setAttribute("value", i);
    //add delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = `<i class="fas fa-edit"></i>   <i class="fas fa-trash-alt"></i>`;
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
};
//delete list item
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-alt")) {
    let index = e.target.parentElement.parentElement.value;
    listItems.splice(index, 1);
    console.log(index);
    renderList();
    saveList();
  }
});
//edit list item
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-edit")) {
    let index = e.target.parentElement.parentElement.value;
    input.value = listItems[index];
    listItems.splice(index, 1);
    renderList();
    saveList();
  }
});

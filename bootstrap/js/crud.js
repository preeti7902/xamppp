//Variables

const nameInput= document.getElementById("name-input");
const emailInput= document.getElementById("email-input");
const addBtn=document.getElementById("adduser");
const tableBody= document.getElementById("tbody");
const updateName= document.getElementById("update-name");
const updateEmail= document.getElementById("update-email");
const updateBtn= document.getElementById("update-form");
const cancelBtn= document.getElementById("cancel-form");

let users= JSON.parse(localStorage.getItem("users")) || [];
let currentid=null;


//Generate Table  functions

function renderTable(){

tableBody.innerHTML=" ";
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    let tr = document.createElement("tr");
    let idTd= document.createElement("td");
    let nameTd= document.createElement("td");
    let emailTd= document.createElement("td");
    let actionTd = document.createElement("td");
    idTd.innerText=user.id;
    nameTd.innerText=user.name;
    emailTd.innerText=user.email;

    let editBtn = document.createElement("button");
    editBtn.addEventListener('click', () => showUpdateForm(user.id) );
    editBtn.className="edit-btn";
    editBtn.innerText= "Edit"
    let deleteBtn= document.createElement("button");
    deleteBtn.addEventListener('click', () => deleteUser(user.id) );
    deleteBtn.className="dlt-btn";
    deleteBtn.innerText="Delete";
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(actionTd);
    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);
    tableBody.appendChild(tr);
}
};
renderTable();



// Add user function
function addUser() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    if(name && email){
        var id = 1;
        var val = users.map(function(x){return x.id; }).indexOf(id);
        while(val != -1){
          id++;
          val = users.map(function(x){return x.id; }).indexOf(id);
          console.log(val);
        }
        const user = {
          id: id,
          name: name,
          email: email,
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        nameInput.value = "";
        emailInput.value = "";
        
        renderTable();
      
    } else{
      alert("Name and Email reqired");
    }
  }


// update button

function updateUser(){
 let name=updateName.value;
 let email= updateEmail.value;
 if (name && email){
    let user = users.find((user)=>
        user.id === currentid
    );
    if (user){
        user.name=name;
        user.email= email;
        localStorage.setItem("users", JSON.stringify(users));
        hideUpdateForm();
        renderTable();
    }
    hideUpdateForm();
    renderTable();
 }
}



// delete button

function deleteUser(userId) {

    users = users.filter((user) => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(users));


    if (users.length === 0) {
        hideUpdateForm();
        
    }
    renderTable();
}


// edit button

function showUpdateForm(userId){
    const user = users.find((user) => user.id === userId);
  if (user) {
    updateName.value = user.name;
    updateEmail.value = user.email;
    currentid = user.id;
    updateBtn.addEventListener("click", updateUser);
    cancelBtn.addEventListener("click", hideUpdateForm);
    document.getElementById("update-container").style.display = "block";
  }
}


// Cancel button

function hideUpdateForm(){
    let updateForm = document.getElementById("update-container");
    updateForm.style.display="none";
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase().trim();
  table = document.getElementById("tbody");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1]; 
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display="";
    } else {
        tr[i].style.display = "none";
    }
}

}

// add button

addBtn.addEventListener('click', addUser);




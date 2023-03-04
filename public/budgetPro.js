const projectStart = document.getElementById("projectStart");
const budgetsBox = document.getElementById("budgetsBox");

const makeTable = (e) => {
  e.preventDefault();
  const project = e.target[0].value;
  if (project.length > 2) {
    const title = document.createTextNode(project.toUpperCase());
    const projectBox = document.createElement("div");
//form 
    const projectForm = document.createElement("form");
    projectForm.setAttribute("action", "http://localhost:5001/api/budgetapp");
    projectForm.setAttribute("method", "post");
    projectForm.setAttribute("class", "expenseadd");
    projectForm.addEventListener("submit", addExpense);
//hidden input for the project
    const projectInput = document.createElement("input");
    projectInput.setAttribute("type", "hidden");
    projectInput.setAttribute("name", `project`);
    projectInput.setAttribute("value", `${project}`);// used to make sure the item is classed correctly in the database
//item input
    const itemInput = document.createElement("input");
    itemInput.setAttribute("type", "text");
    itemInput.setAttribute("name", "name");
//price input
    const priceInput = document.createElement("input");
    priceInput.setAttribute("type", "number");
    priceInput.setAttribute("name", "price");
//button
    const projectSubBtn = document.createElement("button");
    projectSubBtn.setAttribute("type", "submit");
    btnText = document.createTextNode("Add Expense");
    projectSubBtn.appendChild(btnText);
//appending all the inputs to the form
    projectForm.appendChild(projectInput);
    projectForm.appendChild(itemInput);
    projectForm.appendChild(priceInput);
    projectForm.appendChild(projectSubBtn);
//appending the form and title to the box
    projectBox.classList.add("projectBox");
    projectBox.appendChild(title);
    projectBox.appendChild(projectForm);
 //appending to the page   
    budgetsBox.appendChild(projectBox);
  } else {
    alert("name too short");
  }
};

projectStart.addEventListener("submit", makeTable);

function addExpense(e) {
  e.preventDefault()
  console.log(e.target[1].value);
}

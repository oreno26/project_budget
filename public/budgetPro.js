const projectStart = document.getElementById("projectStart");
const budgetsBox = document.getElementById("budgetsBox");

const makeTable = (e) => {
  e.preventDefault();
  const project = e.target[0].value;
  if (project.length > 2) {
    const title = document.createTextNode(project.toUpperCase());
    const projectBox = document.createElement("div");
//form id only placeholder
    const projectForm = document.createElement("form") 
    projectForm.setAttribute("id", `${project}`)
//item input
    const itemInput = document.createElement("input")
    itemInput.setAttribute("type", "text")
    itemInput.setAttribute("name", "name")
//price input
    const priceInput = document.createElement("input")
    priceInput.setAttribute("type", "number")
    priceInput.setAttribute('name', "price")
//button
    const projectSubBtn = document.createElement("button")
    projectSubBtn.setAttribute("type", "sublmit")
    btnText = document.createTextNode("Add Expense")
    projectSubBtn.appendChild(btnText)

    projectForm.appendChild(itemInput)
    projectForm.appendChild(priceInput)
    projectForm.appendChild(projectSubBtn)

    projectBox.classList.add('projetcBox');
    projectBox.appendChild(title)
    projectBox.appendChild(projectForm)
    budgetsBox.appendChild(projectBox)

  } else {
    alert("name to short");
  }
};

projectStart.addEventListener("submit", makeTable);
//check if i can use EJS for the small form
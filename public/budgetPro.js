const projectStart = document.getElementById("projectStart");
const budgetsBox = document.getElementById("budgetsBox");
let count = 0;
const makeTable = (e) => {
  e.preventDefault();
  const project = e.target[0].value;
  if (project.length > 2 && count < 3) {
    count++;
    const title = document.createTextNode(project.toUpperCase());
    const projectBox = document.createElement("div");
    projectBox.setAttribute("id", `${project}`);
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
    projectInput.setAttribute("value", `${project}`); // used to make sure the item is classed correctly in the database
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
    //line break
    const lineBreak = document.createElement("br");
    //list
    const xpList = document.createElement("ul");
    xpList.setAttribute("id", `${project}List`);
    //total
    const totalText = document.createTextNode("Total:    ");
    const totalBox = document.createElement("div");
    totalBox.appendChild(totalText);
    totalBox.setAttribute("id", `${project}Total`)
    totalBox.classList.add("totalBox");
    //appending the form and title to the box
    projectBox.classList.add("projectBox");
    projectBox.appendChild(title);
    projectBox.appendChild(projectForm);
    projectBox.appendChild(lineBreak);
    projectBox.appendChild(xpList);
    projectBox.appendChild(totalBox);
    //appending to the page
    budgetsBox.appendChild(projectBox);
  } else if (project.length > 2 && count <= 3) {
    alert("Max Number of Projects, Check your finances ");
  } else {
    alert("name to short");
  }
};

projectStart.addEventListener("submit", makeTable);

const addExpense = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch("http://localhost:5001/api/budgetapp/", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addToList(data))
    .catch((err) => console.log(err));
};

const addToList = (arr) => {
  const { project, name, price } = arr[0];
  const myList = document.getElementById(`${project}List`);
  const li = document.createElement("li");
  const text = document.createTextNode(
    `Item: ${name}         Price: ${price}₪`
  );
  li.appendChild(text);
  myList.appendChild(li);
  addItUp(project);
};

const addItUp = (proj) => {
  try {
    fetch(`http://localhost:5001/api/budgetapp/${proj}`)
      .then((res) => res.json())
      .then((data) => postSum(data, proj));
  } catch (err) {
    console.log("erroe");
  }
};

const postSum = (arr, pro) => {
  const { sum } = arr[0];
  const totalBox = document.getElementById(`${pro}Total`)
  const totalText = document.createTextNode(sum)
  totalBox.innerHTML = `Total: ${sum}₪`
  console.log(sum, pro);
};

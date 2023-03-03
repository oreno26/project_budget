const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const budget_router = require("./routes/budget.js");

dotenv.config();
const app = express();
app.use(cors());

app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use(`/api/budgetapp`, budget_router);

// app.get('/',function(req,res){
//   res.sendFile('C:/Users/orend/OneDrive/Desktop/Project_budget/public/budgetPro.html')
// } )
const express = require("express");
const cors = require("cors");
const dotnev = require("dotenv");

const budget_router = require("./routes/budget.js");

dotnev.config();

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use(`/api/:table`, budget_router);

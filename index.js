const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

//use express.json() to get data into json format
app.use(express.json());

//cors -- middleware
app.use(cors());

//Port
const PORT = process.env.PORT || 5500;

//import routes
const TodoItemRoute = require("./routes/todoitems");

//Connect with mongo_db
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

// add PORT ans connect to the server
app.listen(PORT, () => console.log("server connected"));

const express = require("express"); 
const indexController = require("../controllers/indexController")
const indexRouter = express.Router(); 

indexRouter.get("/", indexController.displayMessages); 
indexRouter.post("/new", indexController.addNewMessage);

module.exports = indexRouter; 
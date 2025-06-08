const express = require("express"); 
const messageController = require("../controllers/messagesController")
const newRoute = express.Router(); 

newRoute.get("/", messageController.displaySingleMessage); 

module.exports = newRoute
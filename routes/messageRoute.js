const express = require("express"); 
// const { messages } = require("./indexRoute");
const messageController = require("../controllers/messageController"); 
const messageRoute = express.Router(); 

messageRoute.get("/:ID", messageController.displayMessage)

module.exports = messageRoute; 
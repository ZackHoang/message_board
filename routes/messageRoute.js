const express = require("express"); 
// const { messages } = require("./indexRoute");
const messageController = require("../controllers/messageController"); 
const messageRoute = express.Router(); 

messageRoute.get("/", messageController.displayMessage)

module.exports = messageRoute; 
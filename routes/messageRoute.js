const express = require("express"); 
const { messages } = require("./indexRoute");
const messageRoute = express.Router(); 

messageRoute.get("/:user", (req, res) => {
    const { user } = req.params; 
    console.log(user); 
    const message = messages.find((message) => message.user === user)
    res.render("message", {message: message})
})

module.exports = messageRoute; 
const messages = require("../models/messages")

exports.displayMessage = (req, res) => {
    const id = req.params.ID; 
    console.log("id is: ", id); 
    const message = messages.find((message) => message.ID === id); 
    console.log(message); 
    res.render("message", {message: message})
}
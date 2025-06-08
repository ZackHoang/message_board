const messages = require("../models/messages")

exports.displayMessage = (req, res) => {
    const user = req.user; 
    const message = messages.find((message) => message.user === user)
    res.render("message", {message: message})
}
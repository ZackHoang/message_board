const messages = require("../models/messages")

exports.displayMessages = (req, res) => {
  console.log(messages); 
  res.render("index", {messages: messages})
}

exports.addNewMessage = (req, res) => {
    messages.push({
        text: req.body.text, 
        user: req.body.user, 
        added: new Date()
    }); 
    res.redirect("/");
}
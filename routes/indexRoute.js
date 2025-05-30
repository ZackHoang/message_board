// import Router from "express"; 
const express = require("express"); 
const indexRouter = express.Router(); 

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
  
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text, 
    user: req.body.user, 
    added: new Date()
  }); 
  res.redirect("/"); 
})

// indexRouter.get("/", (req, res) => {})

module.exports = {
  messages: messages, 
  indexRouter: indexRouter
}
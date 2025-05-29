const express = require("express"); 
const newRoute = express.Router(); 

newRoute.get("/new", (req, res) => {
    res.render("form"); 
})

module.exports = newRoute; 
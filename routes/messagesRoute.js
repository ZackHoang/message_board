const express = require("express"); 
// const path = require("node:path");
const newRoute = express.Router(); 

// newRoute.set("views", path.join(__dirname, "views")); 
// newRoute.set("view engine", "ejs"); 

newRoute.get("/", (req, res) => {
    res.render("form"); 
})

module.exports = {
    newRoute: newRoute
}; 
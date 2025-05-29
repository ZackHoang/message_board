const path = require("node:path"); 
const express = require("express"); 
const messages = require("./routes/indexRoute.js");
const newRoute = require("./routes/messagesRoute.js");
const indexRouter = require("./routes/indexRoute.js");

const app = express(); 

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
    res.render("index", {messages: messages});
})

app.use("/", indexRouter); 
app.use("/new", newRoute); 

app.listen(3000, () => {
    console.log("App listening at port 3000"); 
})
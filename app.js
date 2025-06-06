const path = require("node:path"); 
const express = require("express"); 
const {newRoute} = require("./routes/messagesRoute.js");
const {messages, indexRouter} = require("./routes/indexRoute.js"); 
const messageRoute = require("./routes/messageRoute.js");

const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter); 
app.use("/new", newRoute); 
app.use("/message", messageRoute); 

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
    res.render("index", {messages: messages});
})

app.listen(3000, () => {
    console.log("App listening at port 3000"); 
})
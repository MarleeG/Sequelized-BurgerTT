const express = require("express");
var exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 4040;

var db = require("./models");
var routes = require("./controllers/list_controller");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes)

// Handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");


db.sequelize.sync()
    .then(results => {
        // console.log(results);
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    })
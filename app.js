// Variables
var express = require("express"),
    app = express();

// App Config
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Routes

// Index
app.get("/", function(req, res) {
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP);

var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/view");

app.use(ejsLayouts);
app.use(express.static(__dirname + "/assets"));

app
	.get("/", (req, res) => {
		res.render("index");
	});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`App listening at port:${PORT}`);
});
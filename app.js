const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shop = require("./routes/shop");

const errorController = require("./controllers/error404");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); //parsing the request body
app.use(express.static(path.join(__dirname, "public"))); //public is a folder here

app.use("/admin", adminRoutes);

app.use(shop);

app.use(errorController.get404);

app.listen(3000, () => {
  console.log("server is running at port 3000");
});

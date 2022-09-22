const express = require("express");
const app = express();
const productos = require(__dirname + "/routes/productos.js");
app.use('/api/productos/', productos);
app.use('/public', express.static(__dirname + '/public'));//agrega capeta publiva
app.use('/static', express.static(__dirname + '/static')); //agrega metodos estaticos
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //para desifrar lo que se manda por post

app.set("view engine", "ejs");
app.set("views", __dirname + "/views/ejs");
app.get("/", async (req, res) => {
  res.status(200).render("pages/index");
});

const PORT =process.env.PORT||8080
const listener = app.listen(PORT, function () {
  try {
    console.log("Your app is listening http://localhost:8080 ");
  } catch (err) {
    console.error(err);
  }
});

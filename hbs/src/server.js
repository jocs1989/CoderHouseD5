const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const productos = require(__dirname + "/routes/productos.js");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();
app.use('/api/productos/', productos);
app.use('/public', express.static(__dirname + '/public'));//agrega capeta publiva
app.use('/static', express.static(__dirname + '/static')); //agrega metodos estaticos
app.set('views',__dirname +"/views/hbs");//directorio donde estan los archivos de plantillas
app.engine(".hbs",exphbs.engine({
  extname:".hbs",
  defaultLayout:__dirname+"/views/hbs/layouts/index.hbs",
  layoutsDir:__dirname+"/views/hbs/layouts/",
  partialsDir: __dirname+"/views/hbs/partials/"
}))
app.set('view engine', '.hbs') //motor de plantillas a utilizar

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //para desifrar lo que se manda por post

app.get("/", async (req, res) => {
  res.status(200).render('partials/registro');
});



//fin de pug

const PORT =process.env.PORT||8080
const listener = app.listen(PORT, function () {
  try {
    console.log("Your app is listening http://localhost:8080 ");
  } catch (err) {
    console.error(err);
  }
});

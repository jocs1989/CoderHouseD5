const express = require("express");
const app = express();

app.use('/public', express.static(__dirname + '/public'));//agrega capeta publiva
app.use('/static', express.static(__dirname + '/static')); //agrega metodos estaticos
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //para desifrar lo que se manda por post

//Para usar plantillas pug
const productosPug = require(__dirname + "/routes/productos.js");
app.use('/api/productos', productosPug);
app.set('view engine', 'pug')
app.set('views',__dirname +"/views/pug");//ejecutar plantilla pug
app.get("/", async (req, res) => {
  res.status(200).render('registro.pug');
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

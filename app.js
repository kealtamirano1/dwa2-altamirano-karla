//inicializamos express
const express = require("express");
const app = express();
//para heroku
const port = process.env.PORT || 3001;

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// Aquí detallar rutas
app.get('/',(req,res) => {
    res.render('index', {
        titulo: 'Üzüm Café'
    })
});
app.get('/about',(req,res) => {
    res.render('about', {titulo:'Sobre nosotros...', estado: true })
});
app.get('/menu',(req,res) => {
    res.render('menu', {titulo:'Menú...', estado: true })
});
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Página no encontrada"
    })
})
//inicializamos el servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
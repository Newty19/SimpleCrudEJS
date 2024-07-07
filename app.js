const express = require('express'); //Importamos el paquete de express
const app = express(); // Declaramos en una variable express para ser utilizado

const port = 3000; //Usamos el puerto 3000

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');


app.use(express.static(__dirname + "/public")); // Utilizamos de middleware para mostrar estaticamente la carpeta public

app.get('/', (req,res) => { //Pagina d einicio siendo sobrecargada por el middleware
    res.render("index",{titulo: "Pagina de Inicio"});
});

app.get('/servicios', (req,res) => { //Pagina que se mostrara si se accede a la ruta de servicios
    res.render("servicios",{titulo: "Pagina de Servicio"});
});

app.use((req,res,next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Pagina de error del sitio web"
    }) // Pagina que se mostrara si no se encuentra la pagina o un error 404
})

app.listen(port, () => {
    console.log('servidor con port: ', port)
});
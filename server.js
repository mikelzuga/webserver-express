const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//Para obtener el puerto || si no existe 3000
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {


    res.render('home', {
        name: 'Pronto más info...'
    });
})
app.get('/about', function(req, res) {

    res.render('about');
})



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
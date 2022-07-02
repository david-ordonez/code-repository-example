const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/info',(req,res) => {
    res.end('Ruta info');
});

app.listen(process.env.PORT || 8080);
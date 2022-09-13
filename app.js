const express = require ('express');
const path = require('path');

const publicPath = path.resolve(__dirname, "./public");
const app = express();

app.use( express.static(publicPath));
app.set('puerto', process.env.PORT || 3001);

app.listen(app.get('puerto'), () => 
console.log(`Servidor corriendo en el puerto ${app.get('puerto')}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

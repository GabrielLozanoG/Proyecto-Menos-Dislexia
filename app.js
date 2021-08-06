// let a = 10;
// let b = 20;
// let result = a * b;
// console.log(`El valor resultado de multiplicar ${a} por ${b} es ${result}`);
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`<center><font size="80px">Bienvenidos A Mi Proyecto</font></center>
    <hr>
    <hr>
    <hr>
    <font size="6px" color="blue"> Esta Es Una Creacion  De API Basica Utilizando Express.</font>
    `);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
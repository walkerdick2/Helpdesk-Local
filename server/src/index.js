const express = require('express');

const app = express;
const port = 1337 ;
app.listen(port, () =>{
    console.log('Listening at HTTP://localhost:1337');
})
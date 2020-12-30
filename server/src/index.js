const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');


const app = express();
app.use(morgan('common'));
app.use(helmet());

const port = 14476 ;
app.listen(port, () => {
    console.log('Server is running on localhost at ' + port);
})
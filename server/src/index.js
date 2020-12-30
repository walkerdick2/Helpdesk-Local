/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const app = express();
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
}));


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});

app.use((req, res, next) => {
    const error = new Error('This is not the route you are looking for -  ' +  "| " +  req.originalUrl + " |" + ' -- Sorry 🤷‍♂️!') ;
    res.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞'  : error.stack
    })
})

const port = 14476;
app.listen(port, () => {
    console.log('Server is running on localhost at ' + port);
});

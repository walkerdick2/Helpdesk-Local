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
const mongoose = require('mongoose') 

require('dotenv').config;

const middleware = require('./middleware')
const tickets = require('./api/tickets')
const app = express();

mongoose.connect("mongodb://localhost:27017/helpdesk-local", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});




app.use(morgan('tiny'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});



app.use('/api/tickets',tickets)

app.use(middleware.notFound);
app.use(middleware.errorHandler)

const port = process.env.PORT || 14476;
app.listen(port, () => {
    console.log('Server is running on localhost at ' + port);
});

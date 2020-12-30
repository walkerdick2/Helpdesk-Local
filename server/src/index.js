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
const middleware = require('./middleware')


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

app.use(middleware.notFound);
app.use(middleware.errorHandler)

const port = 14476;
app.listen(port, () => {
    console.log('Server is running on localhost at ' + port);
});

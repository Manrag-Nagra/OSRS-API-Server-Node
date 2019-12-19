// load our server
const express = require('express')
const app = express()
const morgan = require('morgan');
const itemsRoutes = require('./osrsapi/routes/items');
const hiscoresRoutes = require('./osrsapi/routes/hiscores');

app.use(morgan('dev'));

//Routes requests
app.use('/items', itemsRoutes);
app.use('/hiscores', hiscoresRoutes);

//Handle errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

//Handle errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})


app.listen(3002, () => {
    console.log("Console is up and listening on 3002...")
})

module.exports = app;
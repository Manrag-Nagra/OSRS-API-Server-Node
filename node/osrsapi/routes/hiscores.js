const express = require('express');
const router = express.Router();
const request = require('request');
const hiscoresMapper = require('../mapper/hiscoresMapper');

router.get('/:playername', (req, res, next) => {

    //Grab itemname and pagenum from the url
    const playername = req.params.playername

    const apiURL = 'https://oldschool.tools/ajax/hiscore-stats/' + playername;

    console.log(apiURL);

    res.setHeader('Access-Control-Allow-Origin', '*');

    //Send request to api and send data
    try {
        request(apiURL,  (error, response, body) => {
            JSONResponse = hiscoresMapper(body);
            res.send(JSONResponse);
        });
    } catch (err) {
        res.json({
            error: {
                message: err.message
            }
        })
    }
 
 

});


module.exports = router;
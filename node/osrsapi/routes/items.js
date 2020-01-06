const express = require('express');
const router = express.Router();
const request = require('request');
const itemsMapper = require('../mapper/itemsMapper')

router.get('/:itemname/:pagenum', (req, res, next) => {

    //Grab itemname and pagenum from the url
    const itemname = req.params.itemname;
    const pagenum = req.params.pagenum;

    const apiURL = 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=' + itemname + '&page=' + pagenum;

    console.log(apiURL);

    res.setHeader('Access-Control-Allow-Origin', '*');

    //Send request to api and send data
    try {
        request(apiURL,  (error, response, body) => {
            returnJSON = itemsMapper(body);
            res.send(returnJSON)
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
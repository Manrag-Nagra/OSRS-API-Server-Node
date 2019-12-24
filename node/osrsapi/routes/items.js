const express = require('express');
const router = express.Router();
const request = require('request');
const itemsMapper = require('../mapper/itemsMapper')

router.get('/:itemname/:pagenum', (req, res, next) => {

    const itemname = req.params.itemname;
    const pagenum = req.params.pagenum;
    const apiURL = 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=' + itemname + '&page=' + pagenum;

    console.log(apiURL);

    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        request(apiURL,  (error, response, body) => {
            returnJSON = itemsMapper(body);
            res.send(returnJSON)
        });
    } catch (err) {
        res.json({
            error: {
                message: error.message
            }
        })
    }

});


module.exports = router;
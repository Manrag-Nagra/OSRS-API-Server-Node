const express = require('express');
const router = express.Router();
const request = require('request');
const itemsDetailMapper = require('../mapper/itemsDetailMapper');


router.get('/:itemID', (req, res, next) => {

    const itemID = req.params.itemID;
    const apiURL = 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=' + itemID;

    console.log(apiURL);

    try{
        request(apiURL, (error, response, body) => {
            ItemDetailResponse = itemsDetailMapper(body);
            res.send(ItemDetailResponse);
        });
    }
    catch(err){
        res.json({
            error: {
                message: err.message
            }
        })

    }


});


module.exports = router;
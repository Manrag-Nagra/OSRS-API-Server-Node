function hiscoresMapper(body){

    var hiscoresModel = {
        status: String,
        stats: [{   
                skill: String,
                rank: Number,
                levell: Number,
                experience: Number
            }]
    };


    var bodyJson = JSON.parse(body);
    //Set status
    hiscoresModel.status = bodyJson.status;

    //Loop through each item in the body
    for( var x in bodyJson.stats){

        //extract each individual item
        var key = Object.keys(bodyJson.stats);
        var value = Object.values(bodyJson.stats);
 
    

        for(var y in key){
            var skill = key[y]
            var rank = value[y].rank;
            var level = value[y].level;
            var experience = value[y].experience;
            hiscoresModel.stats[y] = {
               skill, rank, experience, level
            }
        
        }


        
    }

    return hiscoresModel;


};

module.exports = hiscoresMapper;
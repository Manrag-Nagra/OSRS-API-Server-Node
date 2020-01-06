function itemMapper(body){

    var itemsModel = {
        status: String,
        items: [{
            icon: String,
            icon_large: String,
            id: Number,
            name: String,
            description: String,
            members: Boolean,
            current: {
                trend: String,
                price: String
            },
            today:{
                trend: String,
                price: String
            }
        }]
    };
    
    var bodyJson = JSON.parse(body);

    //Whole json not null return success
    if(bodyJson != null){
        itemsModel.status = "success";
    }

    //if item array is empty and nothing is returned
    if(bodyJson.items.length === 0){
        itemsModel.status = "failure";
        itemsModel.items = bodyJson.items;
        return itemsModel
    }

    //Loop through each item in the body
    for( var x in bodyJson.items){

        //extract each individual item
        var icon = bodyJson.items[x].icon;
        var icon_large = bodyJson.items[x].icon_large;
        var id = bodyJson.items[x].id;
        var name = bodyJson.items[x].name;
        var description = bodyJson.items[x].description;
        var members = bodyJson.items[x].members;

        //Replace string with boolean values
        if(members === "true") {
            members = true;
        } else {
            members = false;
        }

        //Assign each value in the itemModel
        itemsModel.items[x] = {
            icon, icon_large, name, id, description, members
        };

        //Current Trend
        var currentTrend = bodyJson.items[x].current.trend;
        var currentPrice = bodyJson.items[x].current.price;

        itemsModel.items[x].current = {
            currentTrend, currentPrice
        };

        //Current Trend
        var todayTrend = bodyJson.items[x].today.trend;
        var todayPrice = bodyJson.items[x].today.price;

        itemsModel.items[x].today = {
            todayTrend, todayPrice
        };
    }


    return itemsModel;

}

module.exports = itemMapper;
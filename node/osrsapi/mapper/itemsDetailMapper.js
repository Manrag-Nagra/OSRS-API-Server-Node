function itemsDetailMapper(body){

    var itemsDetailModel = {
        status: String,
        item: {
            icon: String,
            icon_large: String,
            id: Number,
            type: String,
            name: String,
            description: String,
            members: Boolean,
            current: {
                trend: String,
                price: String,
            },
            today:{
                trend: String,
                price: String
            },
            last30Days: {
                trend: String,
                change: String
            },
            last90Days: {
                trend: String,
                change: String
            },
            last180Days: {
                trend: String,
                change: String
            }
        }
    };


    var bodyJson = JSON.parse(body);

    //Whole json not null return success
    if(bodyJson != null){
        itemsDetailModel.status = "success";
    }

    //if item array is empty and nothing is returned
    if(bodyJson.item == null){
        itemsDetailModel.status = "failure";
        itemsDetailModel.items = bodyJson.item;
        return itemsDetailModel
    }

    //extract each individual item
    var icon = bodyJson.item.icon;
    var icon_large = bodyJson.item.icon_large;
    var id = bodyJson.item.id;
    var name = bodyJson.item.name;
    var description = bodyJson.item.description;
    var members = bodyJson.item.members;
    var type = bodyJson.item.type;

    //Replace string with boolean values
    if(members === "true") {
        members = true;
    } else {
        members = false;
    }

    //Assign each value in the itemModel
    itemsDetailModel.item = {
        icon, icon_large, name, id, description, members, type
    };

    //Current Trend
    var currentTrend = bodyJson.item.current.trend;
    var currentPrice = bodyJson.item.current.price;

    itemsDetailModel.item.current = {
        currentTrend, currentPrice
    };

    //Today Trend
    var todayTrend = bodyJson.item.today.trend;
    var todayPrice = bodyJson.item.today.price;

    itemsDetailModel.item.today = {
        todayTrend, todayPrice
    };

    //Last 30 days
    var day30Trend = bodyJson.item.day30.trend;
    var day30Change = bodyJson.item.day30.change;

    itemsDetailModel.item.last30Days = {
        day30Trend, day30Change
    };

    //Last 90 days
    var day90Trend = bodyJson.item.day90.trend;
    var day90Change = bodyJson.item.day90.change;

    itemsDetailModel.item.last90Days = {
        day90Trend, day90Change
    };

    //Last 180 days
    var day180Trend = bodyJson.item.day180.trend;
    var day180Change = bodyJson.item.day180.change;

    itemsDetailModel.item.last180Days = {
        day180Trend, day180Change
    };



    return itemsDetailModel;


}


module.exports = itemsDetailMapper;
var itemsModel = {
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

module.exports = itemsModel;

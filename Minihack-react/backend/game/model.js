const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
        Player:[{    
            name: {type : String, require :true},
            round:[
                {score:  {type : Number, require: true}}
            ],
            
        }]  
},{
    timestamps : true
});
module.exports = mongoose.model("Game",gameSchema);
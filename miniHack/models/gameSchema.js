const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    newGame : {
        Player:[{           
                name: {type : String, require :true},
                round:[{
                    score:  {type : Number, default :0}
                }]
            }]
        }
},{
    timestamps : true
});
module.exports = mongoose.model("Game",gameSchema);
const gameModel = require("./model");

let create = (game, callback) => {
    let Game = {
            Player:[          
                {name: game[0]},
                {name: game[1]},
                {name: game[2]},
                {name: game[3]}
            ]
    };
    try {
        gameModel.create(Game, (err, data) => {
            callback(err, data);
        });
    } catch (error) {
        console.log("Error" + error);

    }
};

let queryData = (callback) =>{
    gameModel.find((err,data)=>{
        callback(err,data);
    })
}

let findId = (id,callback) =>{
    gameModel.findById(id,(err,data)=>{
        callback(err,data);
    })
}
let addRound = (id,callback)=> {
    findId(id,(err,data)=>{
        if(err) console.log(err);
        else{
            for(let OnePlayer of data.Player){
                OnePlayer.round.push({score:0});
            }
            data.save();
        }
    })
 }
let updateGame = (id,name,Round,Score)=> {
   findId(id,(err,data)=>{
       if(err) console.log(err);
       else{
            data.Player[name].round[Round].score = Score;
            data.save();
        }
   })
}
module.exports = {
    create,
    findId,
    updateGame,
    addRound
}

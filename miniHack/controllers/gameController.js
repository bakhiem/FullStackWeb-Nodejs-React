const gameSchema = require("../models/gameSchema");

let create = (game, callback) => {
    let Game = {
        newGame : {
            Player:[          
                {name: game.p1},
                {name: game.p2},
                {name: game.p3},
                {name: game.p4}
            ]
        }
    };
    try {
        gameSchema.create(Game, (err, data) => {
            callback(err, data);
        });
    } catch (error) {
        console.log("Error" + error);

    }
};

let queryData = (callback) =>{
    gameSchema.find((err,data)=>{
        callback(err,data);
    })
}

let findId = (id,callback) =>{
    gameSchema.findById(id,(err,data)=>{
        callback(err,data);
    })
}

let addRound = (id,callback)=> {
    findId(id,(err,data)=>{
        if(err) console.log(err);
        else{
            for(let player of data.newGame.Player){
                player.round.push({score:0});
            }
            data.save();
        }
    })
    
 }

let updateGame = (id,name,Round,Score,callback)=> {
   findId(id,(err,data)=>{
       if(err) console.log(err);
       else{
           console.log('data'  + data);
            data.newGame.Player[name-1].round[Round-1].score = Score;
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
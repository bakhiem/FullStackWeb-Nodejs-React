const gameModel = require("./model");

let create = (game, callback) => {
    let Game = {
            Player:[          
                {name: game.p1},
                {name: game.p2},
                {name: game.p3},
                {name: game.p4}
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
            for(let player of data.Player){
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
            data.Player[name-1].round[Round-1].score = Score;
            data.Player[name-1].sumScore += Score;
            data.save();
        }
   })
   
}

const getSumScore = () =>
  new Promise((resolve, reject) => {
    gameModel
      .find({
        active: true
      })
      .select("_id sumScore")
      .exec()
      .then(data =>
        resolve(data)
      )
      .catch(err => reject(err));
  });

module.exports = {
    create,
    findId,
    updateGame,
    getSumScore,
    addRound
}

const homeModel = require('./model');

const getAllPlayersName = () => new Promise((resolve, reject) => {
  homeModel.find({})
    .sort({ createAt: -1 })
    .select('players')
    .exec()
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const createPlayer = ({ player1Name, player2Name, player3Name, player4Name }) => new Promise((resolve, reject) => {
  homeModel.create({players: [player1Name, player2Name, player3Name, player4Name]})
    .then(data => resolve({id: data._id}))
    .catch(err => reject(err))
})

const updatePlayerName = (id, { playersName }) => new Promise((resolve, reject) => {
  homeModel.update({
    _id: id
  }, {
      playersName
    })
    .then(data => resolve({ _id: data._id }))
    .catch(err => reject(err))
})

module.exports = {
  getAllPlayersName,
  updatePlayerName,
  createPlayer
}
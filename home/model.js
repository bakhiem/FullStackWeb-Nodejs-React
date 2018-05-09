const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeModel = new Schema({
   players: [{type: String, require: true}]
}, {
  timestamps: {createdAt: "createAt"}
})

module.exports = mongoose.model('home', homeModel);
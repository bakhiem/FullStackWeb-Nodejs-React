const QuestionSchema = require("../models/questionSchema");

let create = (question,callback) => {
    let newQuestion = {
        questionContent: question
    };
    QuestionSchema.create(newQuestion, (err, data) => {
        if (err) {
            console.log(err);
        }
        callback(data);
    });
};

let getQuestionByID = (id, callback) =>{
    QuestionSchema.findOne({"_id": id}, (err, doc) =>{
        if(err) console.log(err);
        callback(doc);
     });
};
let getAllQuestion = (callback) =>{
    QuestionSchema.find((err, docs) =>{
        if (err) console.error(err);
        callback(docs);
    });
}
let updateAnswer = (answer, id, callback)=>{
    if(answer){
        getQuestionByID(id, (doc) =>{
            QuestionSchema.findByIdAndUpdate(id, {yes: doc.yes + 1}, (err) =>{
                callback(err);
            });
        });
    }else{
        getQuestionByID(id, (doc) =>{
            QuestionSchema.findByIdAndUpdate(id, {no: doc.no + 1}, (err) =>{
               callback(err);
            });
        });
    }
   
}
module.exports = {create,getAllQuestion,getQuestionByID,updateAnswer}
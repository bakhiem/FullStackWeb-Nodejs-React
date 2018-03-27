const QuestionSchema = require("../models/questionSchema");

let create = (question,callback) => {
    let newQuestion = {
        questionContent: question
    };
    try {
        QuestionSchema.create(newQuestion, (err, data) => {
            callback(err,data);
        });
    } catch (error) {
        console.log("Error" + error);
        
    }
    
    
};

let getQuestionByID = (id, callback) =>{
    QuestionSchema.findOne({"_id": id}, (err, doc) =>{
        callback(err,doc);
     });
};

let getAllQuestion = (callback) =>{
    QuestionSchema.find((err, docs) =>{
        if (err) console.error(err);
        callback(docs);
    });
};

let findRandom = (callback)=>{
    QuestionSchema.count().exec((err,length)=>{
        if(err) callback(err)
        else{
            QuestionSchema.findOne().skip(Math.floor(Math.random()*length))
            .exec((errRandom,doc)=>{
                callback(errRandom,doc);
            })
        }
    })
};

let updateAnswer = (answer, id, callback)=>{
    if(answer){
        getQuestionByID(id, (err,doc) =>{
            QuestionSchema.findByIdAndUpdate(id, {yes: doc.yes + 1}, (err) =>{
                callback(err);
            });
        });
    }else{
        getQuestionByID(id, (err,doc) =>{
            QuestionSchema.findByIdAndUpdate(id, {no: doc.no + 1}, (err) =>{
               callback(err);
            });
        });
    }
}
module.exports = {create,getAllQuestion,getQuestionByID,updateAnswer}
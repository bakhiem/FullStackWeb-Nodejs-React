const QuestionSchema = require("../models/questionSchema");

let create = (question, callback) => {
    let newQuestion = {
        questionContent: question
    };
    try {
        QuestionSchema.create(newQuestion, (err, data) => {
            callback(err, data);
        });
    } catch (error) {
        console.log("Error" + error);

    }


};

let getQuestionByID = (id, callback) => {
    QuestionSchema.findOne({
        "_id": id
    }, (err, doc) => {
        callback(err, doc);
    });
};

let getAllQuestion = (callback) => {
    QuestionSchema.find((err, docs) => {
        if (err) console.error(err);
        callback(docs);
    });
};

let findRandom = (callback) => {
    QuestionSchema.count().exec((err, length) => {
        if (err) callback(err)
        else {
            QuestionSchema.findOne().skip(Math.floor(Math.random() * length))
                .exec((errRandom, doc) => {
                    callback(errRandom, doc);
                })
        }
    })
};


/**
 * 
 * @param {string} answer is boolean true for yes
 * @param {string} id id of the question
 * @param {(err,doc) =>void} callback is callback function
 */
let updateAnswer = async  (answer, id) => {
    // getQuestionByID(id, (err, doc) => {
    //     if (answer) {
    //         QuestionSchema.findByIdAndUpdate(id, {
    //             yes: doc.yes + 1
    //         }, (err) => {
    //             callback(err);
    //         });
    //     } else {
    //         QuestionSchema.findByIdAndUpdate(id, {
    //             no: doc.no + 1
    //         }, (err) => {
    //             callback(err);
    //         });
    //     }
    // });
    try{
        const question = await getQuestionByID(id,null)
        if (answer) {
            QuestionSchema.findByIdAndUpdate(id, {
                yes: question.yes + 1
            })
        }
        else{
            QuestionSchema.findByIdAndUpdate(id, {
                no: question.no + 1
            })
        }
        
    }
    catch(err){
       console.log(err);
       throw err;
       
    }
}

module.exports = {
    create,
    getAllQuestion,
    getQuestionByID,
    updateAnswer
}
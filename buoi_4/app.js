
// const fs = require('fs');
// // fs.readFile

// let dataFromFile = fs.readFileSync('./package.json',{encoding : 'utf-8'});
// //let dataFromFile = fs.readFileSync('./package.json','utf-8'};
// //console.log(dataFromFile);

// let dataFromFileSync = fs.readFile('./package.json',{encoding : 'utf-8'}, (error,data) =>{
//     if(error){console.log(error);}
//     //console.log(data);
// } );



// //console.log(dataFromFileSync);
// let dataObjectWriteFile ={
//     a : 5, b : 6
// };

// let dataWriteFile = "Hello,I'm Khiem1";
// //JSON.stringify(dataObjectWriteFile)
// fs.writeFile('text.txt',JSON.stringify(dataObjectWriteFile),(err) =>{
//     if(err) console.log(err);
//         //console.log("Write file success");    
    
// });

// //read object
// fs.readFile('text.txt',{encoding : 'utf-8'}, (error,data) =>{
//     if(error){console.log(error);}
//     console.log(JSON.parse(data));
// } );


let fs = require('./fileController');

//console.log(fs);
//console.log(fs.readFile("text.txt"));
//fs.writeFile("text.txt","ahii",a);

// function a(x){
//     console.log(x);
// }

fs.readFile('text.txt',(fileData)=>{
    console.log(fileData); 
})
// Synchronous method to read the file:

const ObjFs = require('fs');
let Data  = ObjFs.readFileSync(__dirname+ "\\readfile.txt");
console.log(Data.toString());

// Synchronous method to writing into a file
ObjFs.writeFileSync(__dirname+"\\WriteIntoFile.txt", "Hey This is Homlander");

// Synchronous method to append into a file  
ObjFs.appendFileSync(__dirname+"\\WriteIntoFile.txt","\nCall me mad man")

//Asynchronous method to read the file:

console.log("start reading..")
ObjFs.readFile(__dirname+ "\\readfile.txt",(error,D)=>
{
    console.log('Reading completed');
    console.log(D.toString());
});
console.log("end reading..")

console.log("start writing into file..")
//Asynchronous method to writing into a file
ObjFs.writeFile(__dirname+"\\WriteIntoFile.txt", "Hey This is Homlander",()=>{
    console.log("Writing process completed");
});
console.log("end writing into file..")

//Asynchronous method to append into a file  
ObjFs.appendFile(__dirname+"\\WriteIntoFile.txt","\nCall me mad man ebf",()=>{
    console.log("Data appended");
});

//Path module

const ObjPath = require('path');

console.log(ObjPath); // check it and get idea of it's functions 

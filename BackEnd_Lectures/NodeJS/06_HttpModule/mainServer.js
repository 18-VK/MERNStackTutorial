// creating a server
const objHttp = require('http');

 const server = objHttp.createServer(); 

 // with callback
// const server = objHttp.createServer((request,resp) => {
//     if(request.url === '/about');
//     {
//         resp.write(JSON.stringify('{message : this is http tutorial'));
//         resp.end();
//     }
// })


// server as evet emitter
// here connection is an event 
// server.on('connection',(socket)=>{
//     console.log('New connection ');
// });


// server.listen(3000); // listen on port 3000
// console.log("start listening on port number 3000" );

//make requet
let options = {
    host: 'www.geeksforgeeks.org',
    path: '/courses',
    method: 'GET'
};
 
// Making a get request to
// 'www.geeksforgeeks.org'
objHttp.request(options, (response) => {
 
    // Printing the statusCode
    // console.log(response)
    console.log(`STATUS: ${response.statusCode}`);
}).end();
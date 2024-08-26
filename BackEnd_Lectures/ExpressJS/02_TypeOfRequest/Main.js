
const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    console.log('Requested URL:', req.url);
    next();
});

app.get('/',(req,res) => {
    console.log("Its get request");
    res.send('Its get request');
});

app.post('/Postreq', (req,res) => {
    console.log("Its post request");
    res.send('Its post request');
})

app.put('/PutReq', (req,res) => {
    console.log("Its put request");
    res.sendFile(__dirname + '/SharedResource/index.html');
})

app.get('/index',(req,res) => {
    console.log("Its get resquest");
    res.sendFile('/SharedReource/index.html', {root : __dirname});
});
// chaining of equest
/*
app.post('/', (req,res) => {
    console.log("Its post request");
    res.send('Its post request');
}).put('/', (req,res) => {
    console.log("Its put request");
    res.sendFile(__dirname + '/SharedResource/index.html');
})
*/

// use of express route 
const  {Blog} = require("./Routes/Blog");
//using endpoints defined in blog.js
app.use(Blog);

// // using express router for endpoint routeExample
const {router} = require("./Routes/Blog");
app.use('/routeExample', router);


app.listen(3001,() => {
    console.log('Listening at port : 3001');
});
const express = require('express');

const ExpressApp = express();
const port = 3000;

// here :Hello-world is the routing parameter that like /CodewithHarry/about-me in the url

// http://localhost:3000/message/hello/?mode=dark&Lng=En
ExpressApp.get('/Message/:Helloworld',(req,resp) => {
    console.log(req.params)
    console.log(req.query)
    resp.send(req.params.Helloworld);
});

ExpressApp.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
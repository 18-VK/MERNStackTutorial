const express = require('express');
const app = express();

//Application level middleware

app.use((req,resp,next) =>{
    console.log(`Time of request : ${Date.now()}`)
    // resp.send("MiddleWare is worked here to send response"); 
    next(); // not to do, if response is sent already,and must to do if response is not getting send other request will hang
});

// Use of router - Where in this UserRouter File there is a Router level MiddleWare
const userRouter = require('./userRouter');
app.use('/user', userRouter);

// error handling MiddleWare
app.use((err,req, res, next) => {
    console.error(err.stack);
    console.log("error");
    // res.status(500).send('Something broke!');
    next();
});

app.get('/', (req,resp) =>{
    console.log("Its a get ");
    resp.send("Its a get ");
    
})

//  Built-in Middleware
app.use(express.json()); // it do not use this then req.body will be print as undefined

app.post('/Submit',(req,resp) =>{

    console.log(req.body);
    resp.send(req.body);
}
)

const morgan = require('morgan');

app.use(morgan('dev'));

app.post('/ThirdParty',(req,resp) =>{

    console.log(req.body);
    resp.send(req.body);
}
)

app.listen(3000,() => {
    console.log("Listening on port 3000");
})


const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser") //express does not support body parser out of the box that is why we need external library


const calculateSum = (counter)=>{
    var sum = 0
    for(let i =0; i<= counter; i++){
        sum = sum+i 
    }
    return sum
}


const handleSum = (req, res)=>{
    let newSum = calculateSum(req.headers.number) 
    console.log(req.body.number) //req.query.counter takes input from the user in the search bar

    res.send("new sum is "+newSum)
}

const addTwo = (req,res)=>{
    console.log(req.headers.number);
    let increaseTwo = parseInt(req.headers.number) + 2
    res.send("increase two " + increaseTwo)
}

const printName = (req,res)=>{
    res.send('my name is Bhaskar Purohit')
}

const resume = (req, res)=>{
    res.send('I am a front end developer working with Capgemini')
}

const createUser = (req,res)=>{
    res.send("first user created")
}

const deleteUser = (req, res)=>{
    res.send('user is deleted')
}

const handleFirstRequest = (req, res)=>{
    var counter = req.headers.counter
    if((counter) < 10000){
        var calculatedSum = calculateSum(counter)
        var answer = "the calculated sum is "+ calculatedSum
        res.send(answer)
    }
    else{
        res.status(411).send("number is too big")
    }
}



//making a middleware function

const middleware = (req, res, next)=>{ 
    console.log("from inside the middleware " + req.headers.number)  
    // res.send("error from inside the middleware")
    next()  //calling next will make the control reach to the method
} 

//middleware intercepts the request and does whatever with it 
//middlewares are called before any route handler
//global middleware handles all the requests
//middleware can do bunch of global things before using the route handler

//app.use(middleware)  //registering the middleware
app.use(bodyParser.json())


app.post('/addTwo', addTwo)
app.post('/handleFirstRequest', handleFirstRequest)
app.delete('/deleteUser', deleteUser)
app.post('/createUser', createUser)
app.get('/printName', printName)
app.get('/resume', resume)
app.get('/',(req,res)=>{
    var result = calculateSum(100)
    res.send("express is running and the sum is "+ result)
})

// app.get('/sum', handleSum)
app.post('/sum', handleSum)


app.listen(port ,()=>{
    console.log("app is listening on port "+port)
})
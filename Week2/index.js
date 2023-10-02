const fs = require("fs")
const express = require("express")



const app = express()
const port = 3000

const middleware1 = (req, res, next)=>{
    console.log("from inside the middleware "+req.headers.counter)
    next()
}

app.use(middleware1)

function calculateSum (counter){
    
    var sum = 0
    for(var i=0; i< counter; i++){
        sum = sum+i
    }return sum

}

const handleFirstRequest = (req, res)=>{
    // var counter = req.query.counter
    console.log(req.body)
    var counter = req.headers.counter
    console.log(req.headers)
    var calculatedSum = calSum(counter)
    res.send("hello express"+calculatedSum)
}

const createUser = (req, res)=>{
    res.send("user created")
}

const updateUser = (req, res)=>{
    res.send('user details updated')
}

const deleteUser = (req, res)=>{
    res.send('user deleted')
}

app.post('/handleFirstRequest', handleFirstRequest)
app.post('/createUser', createUser)
app.put('/updateUser', updateUser)
app.delete('/deleteUser', deleteUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})












const calSum = (counter)=>{
    var sum = 0
    for(var i=0; i<=counter; i++){
        sum+=i
    }return sum

}

var summation = calSum(100)
console.log(summation);
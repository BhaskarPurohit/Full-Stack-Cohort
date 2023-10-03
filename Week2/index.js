const fs = require("fs")
const express = require("express")
const bodyParser = require('body-parser')


const app = express()
const port = 3000
app.use(bodyParser.json())
// const middleware1 = (req, res, next)=>{
//     console.log("from inside the middleware "+req.headers.counter)
//     next()
// }

// app.use(middleware1)

function calculateSum (counter){
    
    var sum = 0
    for(var i=0; i< counter; i++){
        sum = sum+i
    }return sum

}

function calculateMultiple (counter){
    var multiple = 1
    for(var i=1; i< counter; i++){
        multiple = multiple*i
    }
    return multiple
}

const handleFirstRequest = (req, res)=>{
    // var counter = req.query.counter
    console.log(req.body)
    var counter = req.body.counter
    var calculatedSum = calculateSum(counter)
    var calculatedMultiple = calculateMultiple(counter)

    var answerObject = {
        sum: calculatedSum,
        multiple: calculateMultiple
    }
    res.status(200).send(answerObject)
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
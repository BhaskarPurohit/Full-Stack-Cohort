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



const handleFirstRequest = (req, res)=>{
    // var counter = req.query.counter
    var counter = req.query.counter
    var calculatedSum = calculateSum(counter)

    var answerObject = {
        "sum": calculatedSum,
        
    }
    res.status(200).send(answerObject)
}




app.get('/handleFirstRequest', handleFirstRequest)
// app.get('/', getPage)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})













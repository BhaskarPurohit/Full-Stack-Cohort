const fs = require("fs")
const express = require("express")



const app = express()
const port = 3000

function calculateSum (counter){
    var sum = 0
    for(var i=0; i< counter; i++){
        sum = sum+i
    }return sum

}

const handleFirstRequest = (req, res)=>{
    var calculatedSum = calSum(100)
    res.send("hello express"+calculatedSum)
}

app.get('/handleFirstRequest', handleFirstRequest)

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
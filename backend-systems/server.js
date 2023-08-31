const express = require('express')
const app = express()
const port = 3000


const calculateSum = (counter)=>{
    var sum = 0
    for(let i =0; i<= counter; i++){
        sum = sum+i 
    }
    return sum
}


const handleSum = (req, res)=>{
    let newSum = calculateSum(req.headers.number) 
    console.log(+req.headers) //req.query.counter takes input from the user in the search bar
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


app.post('/addTwo', addTwo)

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
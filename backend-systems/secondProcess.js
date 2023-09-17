
const logResponseBody = (jsonBody)=>{
    console.log(jsonBody)
}


const callbackFn = (result)=>{
    result.json().then(logResponseBody)
}


var secondObj = {
    method:"GET"
}


fetch('https://localhost:3000/handleSum?counter=10', secondObj).then(callbackFn)
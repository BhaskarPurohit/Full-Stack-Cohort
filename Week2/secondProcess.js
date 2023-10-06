/*This file needs to do what postman or browser does, i.e. send requests to the server */

var sendObj = {
    method:"GET"

}

function logResponseBody(jsonBody){
    console.log(jsonBody)

}

function callbackFun(result){
    result.json().then(logResponseBody)
}


fetch('http://localhost:3000?counter=14', sendObj).then(callbackFun)
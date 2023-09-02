
const callbackFn = (result)=>{
    console.log(result)
}


var secondObj = {
    method:"POST"
}


fetch('https://localhost:3000', secondObj).then(callbackFn)
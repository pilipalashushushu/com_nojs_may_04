const request = require("request");
const url = "https://www.uuu.com.tw"
request(url,(error,response,body)=>{
    if(!error&&response.statusCode=='200'){
console.log(body)
    }else{
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }

})
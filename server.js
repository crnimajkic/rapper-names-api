const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {

   "21 savage":{
     "age": 29,
     "birthName":"jovo",
     "birthLocation": "Manjaca"
},
"eminem":{
    "age": 43,
    "birthName":"Marshal",
    "birthLocation": "amerika"
},
"50cent":{
    "age": 45,
    "birthName":"Giano",
    "birthLocation": "Amerika"
}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get('/api/:rappersName',(request,response)=>{
    const rappersName = request.params.rappersName.toLowerCase()

    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['eminem'])
    }
})

app.listen(process.env.PORT || PORT,()=>{
    console.log('The server is running on port' + PORT)
})
//EXPRESS

const express = require('express')

const app = express()

app.get('/products',(req,res)=>{
    console.log('Request Received');
res.send('<h1>Welcome GET</h1>');

   // res.send("This is home page");
})

app.patch('/products',(req,res)=>{
    res.send('<h1>Welcome PATCH</h1>');
})

app.post('/products',(req,res)=>{
    res.send('<h1>Welcome POST</h1>');
})

app.delete('/products',(req,res)=>{
    res.send('<h1>Welcome DELETE</h1>');
})
app.listen(1400)



//DOWNLOAD POSTMAN
const express = require('express')
const app = express()
const port = process.env.port||5000;
const chef = require('./chef.json')
app.get('/',(req,res)=>{
res.send(chef)
})
app.listen(port)
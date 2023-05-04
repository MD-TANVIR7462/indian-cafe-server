const express = require('express')
const app = express()
const cors =require('cors')
const port = process.env.port||5000;
const chef = require('./chef.json')

app.use(cors())

app.get('/',(req,res)=>{
res.send(chef)
})
app.get('/:id',(req,res)=>{
   const id = parseInt(req.params.id)
   const singleChef = chef.find(chefOnly => chefOnly.id === id)||{}
   res.send(singleChef)

})

app.listen(port)
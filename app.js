const express = require('express')
const bodyParser = require('body-parser')
const {createColor, getColor, listColors} = require('./dal.js')

const app = express()

app.use(bodyParser.json())

app.get('/colors', function(req,res) {
  res.send(listColors())
})

app.get('/colors/:name', function(req,res) {
  res.send(getColor(req.params.name))
})

app.post('/colors', function(req,res){
  res.send(createColor(req.body))
})

app.delete('/persons/:id', function(req,res) {
  res.send(deletePerson(req.params.id))
})

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
})

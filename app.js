const express = require('express')
const app = express()


//Middlewares

app.use(express.json())

//routeshandler
app.use('/user',)
app.use('*',(req,res) => {
  res.status(200).send({response: `You accessed a route that doesn't exist`})
})

module.exports = app
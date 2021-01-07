const express = require('express')
const app = express();
const userRoute = require('./routes/userRoute')
const response = require('./utils/response')


//Middlewares

app.use(express.json())

//routeshandler
app.use('/user', userRoute)

app.use('*',(req,res) => {
  res.status(200).send({response: `You accessed a route that doesn't exist`})
})

module.exports = app
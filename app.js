const express = require('express')
const app = express();
const userRoute = require('./routes/userRoute')
const response = require('./utils/response')


//Middlewares

app.use(express.json())

//routeshandler
app.use('/', (req, res, next) => {
  res.send(200).send({message: `Welcome to User Registration API by CodeAngelic`})
})
app.use('/user', userRoute)

app.use('*',(req,res) => {
  res.status(200).send({response: `You accessed a route that doesn't exist`})
})

module.exports = app
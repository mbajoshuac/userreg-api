const express = require('express')
const app = express();
const userRoute = require('./routes/userRoute')
const response = require('./utils/response')
const cors = require('cors')

// connecting react and node
app.use(cors())

//Middlewares
app.use(express.json())

//routeshandler for user
app.use('/user', userRoute) 

//routerhandler for 127.0.0.1
app.use('/', (req, res, next) => {
  res.status(200).send({message: `Welcome to User Registration API by CodeAngelic`})
})

app.use('*',(req,res) => {
  res.status(200).send({response: `You accessed a route that doesn't exist`})
})

module.exports = app
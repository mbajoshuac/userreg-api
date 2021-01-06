const catchWrapper = require ('../utils/helpers')
const {regValidation} = require ('../middlewares/validation')
const User = require('../models/userModel');


exports.registerUser = catchWrapper (async (req, res) => {
  const inputValidation = await regValidation.validateAsync(req.body)
  //check if user exist
  const checkUser = User.findOne({email: inputValidation.email})
  if (checkUser) res.status(400).send({message: `A user with this email ${inputValidation.email} already exist. Kindly try again`})
  
  const user = new User({...inputValidation})
  await user.save ({ new: true }, (err) => {
  if (err)  res.status(400).send('User detail could not be registered: Check server connection')})
  res.status(200).send({user})
})

exports.getUser = catchWrapper ( async (req,res)=> {
  const users = await User.find().select('-__v -password')
  res.status(200).send(response(true, "Users Data retrieved successfully", users))
})
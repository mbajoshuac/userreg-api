const User = require('../models/userModel');
const {catchWrapper} = require ('../utils/helpers')
const {regValidation} = require ('../middlewares/validation')
const response = require ('../utils/response')


exports.registerUser = catchWrapper (async (req, res, next) => {
  const inputValidation = await regValidation.validateAsync(req.body)
  //check if user exist
  const checkUser = await User.findOne({email: inputValidation.email})
  if (checkUser) next(res.status(400).send({message: `A user with this email ${inputValidation.email} already exist. Kindly try again`}))
  
  const user = new User({...inputValidation})
  await user.save ({ new: true }, (err) => {
  if (err)  next (res.status(400).send('User detail could not be registered: Check server connection'))})
  next( res.status(200).send({user}))
})

exports.getUser = catchWrapper ( async (req, res, next)=> {
  const users = await User.find().select('-__v -password')
  next(res.status(200).send(response(true, "Users Data retrieved successfully", users)))
})
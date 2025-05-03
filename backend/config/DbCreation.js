const express = require('express')
const app  = express()
const userModel = require('../Models/User')
exports.signup = (req,res)=>{
  const {name,email,password} = req.body
  userModel.create({
    name : name,
    email: email,
    password : password,
  })
  res.render('profile')
}

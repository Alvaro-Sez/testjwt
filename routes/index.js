const express = require('express')
const router = express.Router()

const passport = require('passport')
const jwt = require('jsonwebtoken')

/* Get home page */
router.get('/', (req, res, next) => {
  res.send('Hello World')
})

router.post('/signup', passport.authenticate('signup'), async(req, res, next)=>{
  res.json({
    message:'Signup successful',
    user: req.user
  })
})

router.post('/login', async(req, res, next)=>{
  passport.authenticate('login', async(err, user, info) =>{
    
    })
  
})


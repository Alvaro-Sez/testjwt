const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../model/User')

passport.use('signup', new LocalStrategy(
  {usernameField:'email'}, /* parametros de validacion , by default passport looks for username and password */
  async (email, password, done) =>{ /* after validation this function will be executed */
    try{
      const user = await User.create({email, password})
      done(null, user)
    } catch(e){
      done(e)
    }
  }
))

passport.use('login', new LocalStrategy(
  {usernameField: 'email'},
  async (email, password, done)=>{
    try{
      const user = await User.findOne({email})
      if(!user){
        return done(null, false, {message: 'User not found'})
      }
      const validate = await user.isValidPassword(password)
      if(!validate){
        return done(null, false, {message: 'wrong password'})
      }
      return done(null, user, {message:'login successfull'})

      done(null, user)
    } catch(e){
      done(e)
    }
  }
  ))
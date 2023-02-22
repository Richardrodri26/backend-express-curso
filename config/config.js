require('dotenv').config()

const config = {
  env:process.env.NODE_ENV || 'dev',
  isProd:process.env.NODE_ENV ==='production',
  port:process.env.PORT || 3000,
  dbUrl:process.env.DATABASE_URL,
  apiKey:process.env.API_KEY,
  jwtSecret:process.env.JWT_SECRET,
  userMail:process.env.USER_MAIL,
  passwordMail:process.env.PASSWORD_MAIL,

}

module.exports = {config}
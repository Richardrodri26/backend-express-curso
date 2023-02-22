require('dotenv').config()

const config = {
  dbUrl: process.env.DATABASE_URL,
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUSer: process.env.DB_USER || 'adminR',
  dbPassword: process.env.DB_PASSWORD || 'admin123',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'my_store',
  dbPort: process.env.DB_PORT || '5432',
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,

}

module.exports = {config}

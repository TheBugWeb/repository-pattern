import dotenv from 'dotenv';

dotenv.config()

export const environments = {
  PORT: process.env.PORT || 3030,
  
  HOST_MYSQL: process.env.HOST_MYSQL,
  USER_MYSQL: process.env.USER_MYSQL,
  PASSWORD_MYSQL: process.env.PASSWORD_MYSQL,
  PORT_MYSQL: process.env.PORT_MYSQL,
  DATABASE_MYSQL: process.env.DATABASE_MYSQL,

  MONGODB_URL: process.env.MONGODB_URL
}

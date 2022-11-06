import { createPool } from 'mysql2/promise'

import { environments } from '../environments/environments'

export const pool = createPool({
  host: environments.HOST_MYSQL,
  user: environments.USER_MYSQL,
  password: environments.PASSWORD_MYSQL,
  port: Number(environments.PORT_MYSQL),
  database: environments.DATABASE_MYSQL
})

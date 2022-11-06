import { pool as connection } from './config/database.mysql';

(async () => {
  const result = await connection.query('SELECT 1 + 1 AS result')
  console.log('result: ', result)
})()

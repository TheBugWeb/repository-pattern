import { pool as connection } from '../config/database.mysql';
import { Query, Repository, User } from '../declarations';

export class MySQLRepository implements Repository<User> {
  async create (data: User, query: Query = {}): Promise<User> {
    await connection.query(
      'INSERT INTO Users (name, username, sex) VALUES (?, ?, ?)',
      [data.name, data.username, data.sex]
    )

    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE username = ?',
      [data.username]
    ) as [User[], unknown]

    return rows[0]
  }
}

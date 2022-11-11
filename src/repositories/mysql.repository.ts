import { v4 as uuid } from 'uuid';

import { pool as connection } from '../config/database.mysql';
import { Query, Repository, User } from '../declarations';

export class MySQLRepository implements Repository<User> {
  async create (data: Partial<User>, query: Query = {}): Promise<User> {
    const id = uuid()

    await connection.query(
      'INSERT INTO Users (id, name, username, sex) VALUES (?, ?, ?, ?)',
      [id, data.name, data.username, data.sex]
    )

    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE id = ?',
      [id]
    ) as [User[], unknown]

    return rows[0]
  }
}

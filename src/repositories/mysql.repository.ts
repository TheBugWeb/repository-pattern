import { v4 as uuid } from 'uuid';

import { pool as connection } from '../config/database.mysql';
import { Query, Id, Repository, User } from '../declarations';

export class MySQLRepository implements Repository<User> {
  async create (data: Partial<User>, query: Query = {}): Promise<User> {
    const id = uuid()

    await connection.query(
      'INSERT INTO Users (id, name, username, sex) VALUES (?, ?, ?, ?)',
      [id, data.name, data.username, data.sex]
    )

    return this.get(id)
  }

  async get(id: Id, query: Query = {}): Promise<User> {
    const [rows] = await connection.execute(
      'SELECT * FROM Users WHERE id = ?',
      [id]
    ) as [User[], unknown]

    const user = rows[0]

    if (!user) throw new Error(`The user with ${id} id is not exists.`);
    
    return user
  }
}

import './config/database.mongodb'

import { MySQLRepository } from './repositories/mysql.repository';
import { MongoDBRepository } from './repositories/mongodb.repository';

(async () => {
  // const repository = new MySQLRepository()

  // const data = await repository.create({
  //   name: 'Ivan',
  //   username: 'thebug404',
  //   sex: 'M'
  // })

  const repository = new MongoDBRepository()

  const data = await repository.create({
    name: 'Ivan',
    username: 'thebug404',
    sex: 'M'
  })

  console.log('data: ', data)
})()

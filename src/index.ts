import { MySQLRepository } from './repositories/mysql.repository';

(async () => {
  const repository = new MySQLRepository()

  const data = await repository.create({
    name: 'Ivan',
    username: 'thebug404',
    sex: 'M'
  })

  console.log('data: ', data)
})()

// Import connection to the MongoDB.
import './config/database.mongodb'

import express, { NextFunction, Request, Response } from 'express'

import { environments } from './environments/environments'
import { Repository } from './declarations'

// import { MongoDBRepository } from './repositories/mongodb.repository'
import { MySQLRepository } from './repositories/mysql.repository'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Define controller/client.
class Controller {
  constructor (private repository: Repository) {}

  post = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = req.body

      const entity = await this.repository.create(data)

      res.json(entity)
    } catch (error) {
      next(error)
    }
  }
}

// Using MySQL. 🐬
const controller = new Controller(new MySQLRepository())
// or MongoDB. 🍃
// const controller = new Controller(new MongoDBRepository())

// Register endpoint.
app.post('/users', controller.post)

// Run server. 🚀
app.listen(environments.PORT, () => {
  console.log(`Execute app in port:${environments.PORT}`)
})

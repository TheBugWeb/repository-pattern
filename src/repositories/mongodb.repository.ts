import { Query, Id, Repository, User } from '../declarations'
import { UserModel } from '../models/user.model'

export class MongoDBRepository implements Repository<User> {
  async create (data: unknown, query?: Query | undefined): Promise<User> {
    const user = new UserModel(data)

    return user.save()
  }

  async get (id: Id, query?: Query | undefined): Promise<User> {
    const user = await UserModel.findById(id)

    if (!user) throw new Error(`The user with ${id} id does not exist.`);
    
    return user
  }
}

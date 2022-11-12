import mongoose from 'mongoose'

import { environments } from '../environments/environments'

mongoose.connect(environments.MONGODB_URL as string, () => {
  console.log('Connect database is successfully.')
})

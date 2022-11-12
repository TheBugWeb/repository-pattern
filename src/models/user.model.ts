import mongoose from 'mongoose'

import { User } from '../declarations'

export const UserSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  sex: { type: String, required: true }
})

export const UserModel = mongoose.model('User', UserSchema)

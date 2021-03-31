import mongoose from 'mongoose'

import Auth from '../Auth/Auth'

class Database {
  constructor() {
    this.mongo()
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      Auth(),
      {
        useNewUrlParser: true,
        useFindAndModify: true
      }
    )
  }
}

export default new Database()
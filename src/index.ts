import express from 'express'

import { environments } from './environments/environments'

const app = express()

app.listen(environments.PORT, () => {
  console.log(`Execute app in port:${environments.PORT}`)
})

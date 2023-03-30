const express = require('express')
const app = express()
const port = 8000
const database = require('./utils/connection')
const initModel = require('./models/initModels')

database.authenticate()
    .then( () => console.log('Connection has been established successfully.'))
    .catch( (error) => console.error('Unable to connect to the database:', error))

database.sync({ force:true })
    .then( () => console.log('All models were synchronized successfully.'))
    .catch( (error) => console.error('Unable to sync to the database:', error))   

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


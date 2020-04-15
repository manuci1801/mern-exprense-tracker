const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

const transactionRoute = require('./routes/transactions')

dotenv.config({ path: '.env' })

// connect DB
require('./config/db')()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/transactions', transactionRoute)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on port ${port}`))
const express = require('express')
const colors = require('colors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const port = process.env.PORT || 5000
const schema = require('./schema/schema')
const connectDB = require('./config/db')

// App
const app = express()

// Connect to DB
connectDB()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)



app.listen(port, console.log(`App is running on port ${port}`))

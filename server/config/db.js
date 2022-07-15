const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI)

  console.log(
    `MongoDB is gekoppeld: ${conn.connection.host}`.cyan.underline.bold
  )
}

module.exports = connectDB

/* // const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb')

const connectDB = () => {
  const clint = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })

  clint.connect(err => {
    const collection = clint.db('dbOne').collection('clients')
    clint.close
  })
  console.log(`MongoDB is gekoppeld: `)
}

module.exports = connectDB
 */

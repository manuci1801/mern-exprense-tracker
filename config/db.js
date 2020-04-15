const mongoose = require('mongoose')

module.exports = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB Connected!`)
  } catch (err) {
    console.log(err)
  }
}
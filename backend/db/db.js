// const mongoose = require('mongoose');


// function connectToDb() {
//     mongoose.connect(process.env.DB_CONNECT
//     ).then(() => {
//         console.log('Connected to DB');
//     }).catch(err => console.log(err));
// }


// module.exports = connectToDb;

const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    console.log("Connecting to MongoDB:", process.env.MONGO_URI); // Optional debug
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectToDb;

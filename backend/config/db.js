const mongoose = require('mongoose');

/**
 * Asynchronous function to establish a connection to MongoDB.
 * It uses the connection string defined in the environment variables.
 */
const connectDB = async () => {
  try {
    // Modern Mongoose syntax doesn't require useNewUrlParser and useUnifiedTopology options anymore.
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit process with failure code to prevent the server from running without a DB connection
    process.exit(1);
  }
};

module.exports = connectDB;

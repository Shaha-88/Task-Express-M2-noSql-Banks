const mongoose = require('mongoose');
const dotenv =require("dotenv");
dotenv.config();

const connectDB = async () => {
    try{
     await mongoose.connect(process.env.MONGO_DB_URL);

    console.log(`mongo connected: ${conn.connection.host}`);
  }catch(error){
    console.log ("Could not conect to be!",error);
  }
};

  module.exports = connectDB;
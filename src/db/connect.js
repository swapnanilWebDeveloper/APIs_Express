const mongoose = require('mongoose');

const connectDB = () => {
    console.log("Hello , I am inside connectDB function....!!!")
 return mongoose.connect("mongodb://127.0.0.1:27017/MyProductAPI");
}
module.exports = connectDB;
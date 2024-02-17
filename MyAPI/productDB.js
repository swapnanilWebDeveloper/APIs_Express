const connectDB = require("./src/db/connect");

const Product = require("./src/models/product");
const ProductJson = require("./products.json");

const start = async () => {
    try{
        await connectDB();
       // await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Successfully Documents of products inserted...!!!");
    }
    catch(error){
        console.log("Something went wrong with Databse connection ....!!!"+error);
    }
}

start();
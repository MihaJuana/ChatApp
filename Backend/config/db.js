const mongoose = require("mongoose");
const dotenv = require("dotenv")
const colors = require('colors');



const uri = "mongodb+srv://hcvaronacca:%23Oneykitty25@cluster0.tbnkvpt.mongodb.net/mydatabase?retryWrites=true&w=majority"



const connectDB = async() =>{
    try{
        const connect = await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });

        console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline);
       
    } catch(error){
         console.log(`Error: ${error.message}`.red.bold)
        
         process.exit();
    }
   

 

}

module.exports = connectDB;


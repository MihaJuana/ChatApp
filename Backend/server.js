const express = require('express');
const dotenv = require("dotenv")
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require("./routes/userRoute");
const {notFound, errorHandler } = require("./midddleware/errorMiddleware")

// enviroment Setup
dotenv.config();

// DB calling
connectDB();


const app = express();

// Accept json Data
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("API is running successfully")
})

app.use('/api/user',userRoutes)
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);





// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server started on Port ${PORT}`.yellow.bold))

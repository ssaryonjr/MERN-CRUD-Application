const express = require('express');
const colors = require('colors') //Allows custom color change in terminal
const dotenv = require('dotenv').config(); //Abstracts our secret keys 
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db') //Our database connection.
const PORT = process.env.PORT || 5000 //Port that will be used to run server

connectDB();

const app = express();

//Middleware that parses incoming JSON request and puts the data in req.body 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//Handles Errors 
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
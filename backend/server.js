const express = require('express');
const dotenv = require('dotenv').config(); //Abstracts our secret keys 
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

const app = express();

//Middleware that parses incoming JSON request and puts the data in req.body 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

//Handles Errors 
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
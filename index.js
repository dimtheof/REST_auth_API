const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();
// Connect to db
mongoose.connect(process.env.DB_CREDENTIALS,
    { useNewUrlParser: true,
    useUnifiedTopology: true }, (res) => {
    console.log(res);
    });

// Middleware
app.use(express.json());



// Route Middlewares
app.use('/api/user', authRoute);

app.use('/api/posts', postRoute);

app.listen(8081, () => {
    console.log("Server started")
});
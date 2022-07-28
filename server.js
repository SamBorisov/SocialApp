const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');


dotenv.config();
mongoose.connect(
    'mongodb://localhost:27017/' + process.env.MONGO_MY, 
    { useNewUrlParser: true, useUnifiedTopology: true  },
    () => {
    console.log('Connected to MongoDB')
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
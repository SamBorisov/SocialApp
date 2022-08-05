const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');


dotenv.config();
mongoose.connect(
    process.env.MONGO_MY, 
    { useNewUrlParser: true, useUnifiedTopology: true  },
    () => {
    console.log('Connected to MongoDB')
    });

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// app.get("/", (req, res) => {
//     res.send("Welcome to this social app");
// });

// app.get("/users", (req, res) => {
//     res.send("Hello Users");
// });
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
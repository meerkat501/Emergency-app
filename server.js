const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection established'))
    .catch(() => console.log(err));

const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/user');

app.use('/api/users', userRoutes);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
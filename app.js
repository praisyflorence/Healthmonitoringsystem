const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', authRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
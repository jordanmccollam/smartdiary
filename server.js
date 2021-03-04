require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).catch(e => {
    console.error('Connection error', e.message);
});
const db = mongoose.connection;

const routes = require('./routes/index.js');

const app = express();
const apiPort = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/', (req, res) => {
    res.send('Smart Diary Server');
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
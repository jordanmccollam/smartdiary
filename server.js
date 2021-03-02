require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true }).catch(e => {
    console.error('Connection error', e.message);
});
const db = mongoose.connection;

const routes = require('./routes/index.js');

const app = express();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Smart Diary Server');
});

app.use('/api', routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
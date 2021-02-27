const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/smartdiary', { useNewUrlParser: true }).catch(e => {
    console.error('Connection error', e.message);
});
const db = mongoose.connection;

const entryRouter = require('./routes/entry-router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Smart Diary Server');
});

app.use('/api', entryRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
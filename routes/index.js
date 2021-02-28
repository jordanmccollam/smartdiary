const express = require('express');

const EntryCtrl = require('../controllers/entry-ctrl');
const UserCtrl = require('../controllers/user-ctrl');
const MoodCtrl = require('../controllers/mood-ctrl');

const router = express.Router();

// ENTRIES
router.post('/entry', EntryCtrl.createEntry);
router.put('/entry/:id', EntryCtrl.updateEntry);
router.delete('/entry/:id', EntryCtrl.deleteEntry);
router.get('/entry/:id', EntryCtrl.getEntry);
router.get('/entries', EntryCtrl.getEntries);

// MOODS
router.post('/mood', MoodCtrl.createMood);
router.put('/mood/:id', MoodCtrl.updateMood);
router.delete('/mood/:id', MoodCtrl.deleteMood);
router.get('/mood/:id', MoodCtrl.getMood);
router.get('/moods', MoodCtrl.getMoods);


// USERS
router.get('/user/:email', UserCtrl.getUser);
router.post('/user', UserCtrl.createUser);
router.put('/user/:id', UserCtrl.updateUser);

module.exports = router;
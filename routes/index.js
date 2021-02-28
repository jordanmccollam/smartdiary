const express = require('express');

const EntryCtrl = require('../controllers/entry-ctrl');
const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

// ENTRIES
router.post('/entry', EntryCtrl.createEntry);
router.put('/entry/:id', EntryCtrl.updateEntry);
router.delete('/entry/:id', EntryCtrl.deleteEntry);
router.get('/entry/:id', EntryCtrl.getEntry);
router.get('/entries', EntryCtrl.getEntries);


// USERS
router.get('/user/:email', UserCtrl.getUser);
router.post('/user', UserCtrl.createUser);

module.exports = router;
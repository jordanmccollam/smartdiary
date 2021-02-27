const express = require('express');

const EntryCtrl = require('../controllers/entry-ctrl');

const router = express.Router();

router.post('/entry', EntryCtrl.createEntry);
router.put('/entry/:id', EntryCtrl.updateEntry);
router.delete('/entry/:id', EntryCtrl.deleteEntry);
router.get('/entry/:id', EntryCtrl.getEntries);
router.get('/entries', EntryCtrl.getEntry);

module.exports = router;
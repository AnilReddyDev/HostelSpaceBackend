const router = require('express').Router();
const { addHostel, gethostel, updateHostel, deleteHostel } = require('../Controllers/hostelController');
router.get('/gethostel', gethostel);
router.post('/addhostel', addHostel);
router.put('/updateHostel', updateHostel);
router.delete('/deleteHostel', deleteHostel);

module.exports = router
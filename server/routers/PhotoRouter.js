const router = require('express').Router();

const {
    deleteimage,
    upload
} = require('../controllers/photo')

router.post('/deleteimage', deleteimage);
router.post('/upload', upload)

module.exports = router;
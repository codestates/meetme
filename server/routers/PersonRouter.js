const router = require('express').Router();

const {
  profile,
  profilebytag
} = require('../controllers/person')

router.get('/profile', profile);
router.get('/profilebytag/:tagId', profilebytag);

module.exports = router;
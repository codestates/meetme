const router = require('express').Router();

const {
    signup,
    login,
    logout,
    userinfo,
    close
} = require('../controllers/user');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/userinfo', userinfo);
router.delete('/close', close);

module.exports = router;

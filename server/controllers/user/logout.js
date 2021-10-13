const { isAuthorized } = require('../tokenFunctions/token');

module.exports = async (req, res) => {
    const tokenData = isAuthorized(req);

    if (tokenData) {
        res.clearCookie('jwt');
        res.status(200).json({ message: 'successfully singed out!' });
    } else {
        res.status(400).json({ message: 'you\'re currently not logged in' });
    }
};
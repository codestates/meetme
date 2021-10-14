const { sign, verify } = require('jsonwebtoken');
const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = {
    generateAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRET, { exporesIn: '180s' });
    },
    sendAccessToken: (res, accessToken) => {
        res.cookie('jwt', accessToken, {
            expires: new Date(Date.now() + 600000),
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });

        res.status(200).json({ message: 'ok' });
    },
    isAuthorized: (req) => {
        const cookie = req.cookies.jwt;

        if (!cookie) return null;

        try {
            return verify(cookie, process.env.ACCESS_SECRET);
        } catch (err) {
            return null;
        };
    }
};
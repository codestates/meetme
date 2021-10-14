const DatabaseConnector = require('../../lib/databaseConnector');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions/token');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
    const { email, password } = req.body;

    const sql = `select * from user
                 where email = '${email}' and '${password}'`;
    const user = await db.query(sql);
    
    db.terminate();

    if (user) {
        const accessToken = generateAccessToken(user.data);
        sendAccessToken(res, accessToken);
        
        res.status(200).json({ role: user.role });
    } else {
        res.status(401).json({ message: 'Invalid user or Wrong password' });
    }
};
const path = require('../../helpers/path');
const role = require('../../helpers/role');
const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ message: 'email or password is not provided' });
        return;
    }

    const sql = `select * from user
                 where email = '${db.escape(email)}', '${db.escape(password)}'`;
    const user = await db.query(sql);

    db.terminate();

    if (user) {
        res.status(409).json({ message: 'provided email already exists' });
        return;
    } else {
        const sql2 = `insert into user email, password, username, profile_image, role, createdAt, updatedAt
                      values ('${db.escape(email)}', '${db.escape(password)}', '${eb.escape(email)}', '${path.imagePath}', '${role.user}', now(), now())`;
        await db.query(sql2);

        db.terminate();

        res.status(201).json({});
    }
};
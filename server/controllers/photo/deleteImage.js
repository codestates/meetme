const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

const path = require('../../helpers/path');

module.exports = async (req, res) => {
  const tokenData = isAuthorized(req);
  const { email } = tokenData;

  const sql = `update user set profile_image = '${path.imagePath}'
               where email = '${db.escape(email)}'`;
  await db.query(sql);
  db.terminate();

  const sql2 = `select * from user
                where email = '${db.escape(email)}'`;
  const user = await db.query(sql2);
  db.terminate();

  res.status(200).json({
    email: user[0].email,
    filepath: user[0].profile_image,
    message: 'photo has been deleted'
  });
};

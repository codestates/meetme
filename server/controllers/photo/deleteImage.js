const databaseConnector = require('../../lib/databaseConnector');
const db = new databaseConnector();
db.init();

const path = require('../../helpers/path');

module.exports = async (req, res) => {
  const tokenData = isAuthorized(req);
  const { email } = tokenData;

  const sql = `update user set profile_image = '${path.imagePath}'
               where email = '${email}'`;
  await db.query(sql);


  const sql2 = `select * from user
                where email = '${email}'`;
  const user = await db.query(sql2);

  res.status(200).json({
    email: user[0].email,
    filepath: user[0].profile_image,
    message: 'photo has been deleted'
  });
};

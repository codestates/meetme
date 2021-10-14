const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
  const tokenData = isAuthorized(req);
  const { email, filepath } = tokenData;

  const sql = `update user set = ${db.escape(filepath)}
               where email = '${db.escape(email)}'`;
  await db.query(sql);

  const sql2 = `select * from user
                where email = '${db.escape(email)}'`;
  const user = await db.query(sql2);
  
  db.terminate();

  res.status(200).json({
    email: user[0].email,
    filepath: user[0].profile_image
  });
};

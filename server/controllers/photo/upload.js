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

  res.status(200).json({
    email: sql2[0].email,
    filepath: sql2[0].profile_image
  });
};

const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
  const sql = `select * from user
               where email = '${db.escape(req.body.email)}' and password = '${db.escape(req.body.password)}'`;
  const user = await db.query(sql);
  db.terminate();

  const tokenData = isAuthorized(req);
  const { email, password } = tokenData;

  if (email === user[0].email && password === user[0].password) {
    const sql = `delete from user
                 where email = '${db.escape(_user[0].email)}' and password = '${db.escape(_user[0].password)}'`;
    await db.query(sql);
    db.terminate();
  }

  res.status(200).json({
    removed: user[0].email,
    message: 'account has been removed'
  });
};

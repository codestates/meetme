const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
  const sql = `select * from user
               where email = '${req.body.email}' and password = '${req.body.password}'`;
  const _user = await db.query(sql);
  db.terminate();
  // const tokenData = isAuthorized(req);
  // const { email, password } = tokenData;

  if (email === _user[0].email && password === _user[0].password) {
    const sql = `delete from user
                 where email = '${_user[0].email}' and password = '${_user[0].password}'`;
    await db.query(sql);
    db.terminate();
  }

  res.status(200).json({
    removed: _user[0].email,
    message: 'account has been removed'
  });
};

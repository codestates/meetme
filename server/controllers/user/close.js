const { isAuthorized } = require('../tokenFunctions/token');
const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
  const tokenData = isAuthorized(req);
  const { email, password } = tokenData;

  if (email && password) {
    const sql = `delete from user
                 where email = '${db.escape(_user[0].email)}' and password = '${db.escape(_user[0].password)}'`;
    await db.query(sql);
    
    db.terminate();

    res.status(200).json({
      removed: user[0].email,
      message: 'account has been removed'
    });
  }
};

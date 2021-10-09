const databaseConnector = require('../../lib/databaseConnector');
const db = new databaseConnector();
db.init();

module.exports = async (req, res) => {


  res.status(200).json({ message: 'changed' });
};

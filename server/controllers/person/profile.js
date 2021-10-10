const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
  const sql = `select user.username, user.email, user.profile_image, category.name, tag.name from user
               left join user_category
               on user.id = user_category.user_id
               left join category
               on user_category.category_id = category.id
               left join category_tag
               on category.id = category_tag.category_id
               left join tag
               on category_tag.tag_id = tag.id`;

  const _user = await db.query(sql);
  db.terminate();

  res.status(200).json({ users: _user });
};

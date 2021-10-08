const db = require('../../../models');

module.exports = async (req, res) => {
  const _tag = await db.tag.findAll({
    where: { id: tagId }
  });

  res.status(200).json({ users: user });
};

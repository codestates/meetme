const db = require('../../../models');

module.exports = async (req, res) => {
  const _user = await db.user.findAll({
    include: [
      {
        model: db.user_category,
        required: true,
        include: [
          {
            model: db.category,
            required: true,
            include: [
              {
                model: db.category_tag, required: true,
                include: [
                  { model: db.tag, required: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  });

  res.status(200).json({ users: _user });
};

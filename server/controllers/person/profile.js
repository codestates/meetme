const db = require("../../../models");

module.exports = async (req, res) => {
  const _user = await db.user.findAll();

  const _user_category = await db.user_category.findAll({
    include: [
      {
        model: db.user,
      },
    ],
    where: { user_id: _user.id },
  });

  const _category = await db.category.findAll({
    include: [
      {
        model: db.user_category,
      },
    ],
    where: { id: _user_category.category_id },
  });

  const _category_tag = await db.category_tag.findAll({
    include: [
      {
        model: db.category,
      },
    ],
    where: { category_id: _category.id },
  });

  const _tag = await db.tag.findAll({
    include: [
      {
        model: db.category_tag,
      },
    ],
    where: { id: _category_tag.tag_id },
  });

  res
    .status(200)
    .json({
      users: {
        username: _user.username,
        email: _user.email,
        profilepath: _user.profile_image,
        category: _category.name,
        tag: _tag.name,
      },
    });
};

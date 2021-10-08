const db = require('../../../models');

module.exports = async (req, res) => {
  const tokenData = isAuthorized(req);
  const { email, password } = tokenData;

  const _user = await db.user.findOne({
    where: { email: email, password: password }
  });

  if (_user) {
    res.status(409).json({ message: 'username already exists' });
    return;
  }

  const { username, password, category, tag } = req.body;

  if (username) {
    await db.user.update(
      {
        username: username
      },
      {
        where: { username: username }
      }
    );
  }
  if (password) {
    await db.user.update(
      {
        password: password
      },
      {
        where: { username: username }
      }
    );
  }

  if (category) {
    const _category = await db.category.findOne({
      where: { name: category }
    });

    if (_category) {
      await db.user_category.update(
        {
          category_id: _category.id,
          user_id: _user.id
        },
        {
          where: { category_id: _category.id }
        }
      );
    } else {
      const inserted = await db.category.create({
        name: category,
        flag: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      db.user_category.create({
        user_id: _user.id,
        category_id: inserted.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  if (tag) {
    const _tag = await db.tag.findOne({
      where: { name: tag }
    });

    const _category = await db.category_tag.findOne({
      where: { tag_id: _tag.id }
    });

    if (_tag) {
      await db.category_tag.update({
        category_id: _category.id,
        tag_id: _tag.id
      });
    } else {
      const inserted = await db.tag.create({
        name: tag,
        flag: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      await db.category_tag.create({
        category_id: _category.id,
        tag_id: inserted.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  res.status(200).json({ message: 'changed' });
};

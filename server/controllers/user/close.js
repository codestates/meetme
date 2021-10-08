const db = require('../../../models');

module.exports = async (req, res) => {
  const _user = await db.user.findOne({
    where: { email: req.body.email, password: req.body.password }
  });

  /*
  const _user_category = await user_category.findAll({
    include: [
      {
        model: user
      }
    ],
    where: { user_id: _user.id }
  });

  const _category = await category.findAll({
    include: [
      {
        model: _user_category
      }
    ],
    where: { id: _user_category.category_id }
  });

  const _category_tag = await category_tag.findAll({
    include: [
      {
        model: category
      }
    ],
    where: { category_id: _category.id }
  });

  const _tag = await tag.findAll({
    include: [
      {
        model: _caegory_tag
      }
    ],
    where: { id: _category_tag.tag_id }
  });
  */

  const tokenData = isAuthorized(req);
  const { email, password } = tokenData;

  if (email === _user.email && password === _user.password) {
    await db.user.destroy({
      where: { email: _user.email, password: _user.passwod }
    });

    /*
    await user_category.destroy({
      where: { user_id: _user.id }
    });

    if (_category.flag === 1) {
      await category.destroy({
        where: { id: _user_category.category_id }
      });
    }

    await category_tag.destroy({
      where: { category_id: _category.id }
    });

    if (_tag.flag === 1) {
      await tag.destroy({
        where: { id: _category_tag.tag_id }
      });
    }
    */

    res.status(200).json({
      removed: _user.email,
      message: 'account has been removed'
    });
  }
};

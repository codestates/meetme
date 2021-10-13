const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
  const { username, password, categoryName, tagName } = req.body;

  const getUser = `select id, email from user
                   where email = '${db.escape(email)}'`;

  if (username) {
    const sql = `update user set username = '${db.escape(username)}'
                 where email = '${db.escape(email)}'`;
    await db.query(sql);
    db.terminate();
  } else {
    const sql = getUser;
    const user = await db.query(sql);

    const sql2 = `update user set username = '${db.escape(user[0].email)}'
                  where email = '${db.escape(email)}'`;
    await db.query(sql2);
    db.terminate();
  }

  if (password) {
    const sql = `update user set password = '${db.escape(password)}'
                 where email = '${db.escape(email)}'`;
    await db.query(sql);
    db.terminate();
  }

  if (categoryName && tagName) {
    const sql = `select * from category
                 where name = '${db.escape(categoryName)}'`;
    const category = await db.query(sql);
    db.terminate();

    const sql2 = `select * from tag
                  where name = '${db.escape(tagName)}'`;
    const tag = await db.query(sql2);
    db.terminate();

    if (category[0].name && tag[0].name) {
      const sql = getUser;
      const user = await db.query(sql);
      db.terminate();

      const sql2 = `update user_category set category_id = ${category[0].id}
                    where user_id = ${user[0].id}`;
      await db.query(sql2);
      db.terminate();

      const sql3 = `update category_tag set tag_id = ${tag[0].name}
                    where category_id = ${category[0].id}`;
      await db.query(sql3);
      db.terminate();
    } else {
      const sql = `insert into category name, flag, createdAt, updatedAt
                   values ('${db.escape(categoryName)}', 1, now(), now())`;
      const category = await db.query(sql);
      db.terminate();

      const sql2 = `insert into tag name, createdAt, updatedAt
                   values ('${db.escape(tagName)}', now(), now())`;
      const tag = await db.query(sql2);
      db.terminate();

      const sql3 = getUser;
      const user = await db.query(sql3);
      db.terminate();

      const sql4 = `update user_category set user_id = ${user[0].id}, category_id = ${category[0].insertedId}
                    where user_id = ${db.escape(user[0].id)}`;
      await db.query(sql4);
      db.terminate();

      const sql4 = `update category_tag set category_id = ${category[0].insertedId}, tag_id = ${tag[0].insertedId}
                    where user_id = ${db.escape(user[0].id)}`;
      await db.query(sql4);
      db.terminate();

      const sql5 = `insert into category_tag category_id, tag_id, createdAt, updatedAt
                    values (${category[0].insertedId}, ${tag[0].insertedId}, now(), now())`;
      await db.query(sql5);
      db.terminate();
    }
  } else {
    const sql = getUser;
    const user = await db.query(sql);
    db.terminate();

    const sql2 = `update user_category set category_id = null
                  where user_id = ${db.escape(user[0].id)}`;
    await db.query(sql2);
    db.terminate();
  }

  res.status(200).json({ message: 'changed' });
};

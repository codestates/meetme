const DatabaseConnector = require('../../lib/databaseConnector');
const db = new DatabaseConnector();
db.init();

module.exports = async (req, res) => {
    const { email, categoryName, tagName } = req.body;

    const sql = `select * from user
                 where email = '${db.escape(email)}'`;
    const user = await db.query(sql);

    const sql2 = `insert into category name, flag, createdAt, updatedAt
                  values (${categoryName}, 1, now(), now())`;
    const category = await db.query(sql2);

    const sql3 = `insert into user_category user_id, category_id, createdAt, upatedAt
                  values (${db.escape(user[0].id)}, ${category[0].insertedId}, now(), now()})`;
    await db.query(sql3);

    const sql4 = `insert into tag name, createdAt, updatedAt
                  values (${tagName}, now(), now())`;
    const tag = await db.query(sql4);

    const sql5 = `insert into category_tag category_id, tag_id, createdAt, updatedAt
                  values (${category[0].insertedId}, ${tag[0].insertedId}, now(), now()})`;
    await db.query(sql5);
    
    db.terminate();

    res.status(201).json({ message: 'successfully created' });
}
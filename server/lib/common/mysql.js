const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config();

class SingletonBase {
  static instance;
  constructor() {
    if (!SingletonBase.instance) {
      SingletonBase.instance = this;
    } else {
      console.log('    already has instance.');
      console.log('    return existing instance.');
    }

    return SingletonBase.instance;
  }
}

module.exports = class DatabaseConnector extends SingletonBase {
  constructor() {
    super();
    this.config = {
      host: 'localhost',
      user: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'mijeong'
    };

    return this;
  }

  init() {
    this.connection = mysql.createConnection({
      ...this.config,
      multipleStatements: true
    });

    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) {
          reject(err.message);
        }
        resolve('ok');
      });
    }).catch((error) => {});
  }

  terminate() {
    if (!this.connection || this.connection.state === 'disconnected') {
      console.log('        cannot terminate connection of disconnected state.');
      return;
    }
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          reject(err.message);
        }

        // delete conneciton object
        delete this.connection;
        resolve('ok');
      });
    }).catch((error) => {});
  }

  query(sql) {
    return new Promise((resolve) => {
      this.connection.query(sql, function (error, results) {
        if (error) throw error;

        resolve(results);
      });
    });
  }

  escape(value) {
    return new Promise((resolve) => {
      this.connection.escape(value, function (error, results) {
        if (error) throw error;

        resolve(results);
      });
    });
  }
};
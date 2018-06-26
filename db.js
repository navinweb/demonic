const Sequelize = require('sequelize');

const dbString = process.env.DATABASE_URL || 'postgres://nmode:111@localhost:5432/demonic';
const ssl = !!process.env.DATABASE_URL;
const db = new Sequelize(
  dbString, {
    dialectOptions: {
      ssl
    },
    operatorsAliases: false,
  }
);

const Posts = db.define('posts', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  image: Sequelize.STRING,
});

db.sync();

module.exports = {
  db,
  Posts,
};

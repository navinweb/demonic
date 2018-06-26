const Sequelize = require('sequelize');

const db = new Sequelize(
  'postgres://nmode:111@localhost:5432/demonic', {
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

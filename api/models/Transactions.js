const Sequelize = require('sequelize');
const db = require('../../config/database');

const Transaction = db.define('transaction', {
  index: { type: Sequelize.INTEGER, primaryKey: true },
  Account: { type: Sequelize.STRING },
  Payee: { type: Sequelize.STRING },
  Category: { type: Sequelize.STRING },
  Outflow: { type: Sequelize.FLOAT },
  Date: { type: Sequelize.DATEONLY },
});

module.exports = Transaction;

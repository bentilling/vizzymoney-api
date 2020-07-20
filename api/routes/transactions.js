const express = require('express');

const router = express.Router();
const Transaction = require('../models/Transactions');

router.get('/', (req, res) => {
  Transaction.findAll()
    .then((transactions) => res.status(200).json(transactions))
    .catch((err) => console.log(err));
});

module.exports = router;

const express = require('express');
const { performSearch } = require('../controllers/searchController');

const router = express.Router();

router.get('/', performSearch);

module.exports = router;

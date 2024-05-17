const express = require('express');
const router = express.Router();

const employerController = require('../controller/employer');

router.get('/employers', employerController.getEmployers);

module.exports = router;
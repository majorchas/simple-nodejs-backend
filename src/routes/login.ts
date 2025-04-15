import express from 'express';

const sampleUserController = require('../controller/login.controller');

const router = express.Router();

router.post('/createTest',sampleUserController?.createTestUser);

module.exports = router;
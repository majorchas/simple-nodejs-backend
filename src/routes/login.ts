import express from 'express';

const sampleUserController = require('../controller/login.controller');

const router = express.Router();

router.post('/create-user',sampleUserController?.createTestUser);

module.exports = router;
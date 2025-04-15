"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sampleUserController = require('../controller/login.controller');
const router = express_1.default.Router();
router.post('/createTest', sampleUserController === null || sampleUserController === void 0 ? void 0 : sampleUserController.createTestUser);
module.exports = router;

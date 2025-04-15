"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
console.log(process.env.MONGOURL);
mongoose_1.default.connect(process.env.MONGOURL);
const port = 3300;
// SimpleRoutes
const sampleUserRoute = require('./routes/login');
app.use('/user', sampleUserRoute);
app.listen(port, () => {
    console.log('Sever is up and running');
});

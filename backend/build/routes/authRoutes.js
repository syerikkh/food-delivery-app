"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const verifyToken_1 = require("../controllers/verifyToken");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.get('/users', verifyToken_1.verifyAccessToken, authController_1.getUsers).post('/signUp', authController_1.signUp).post('/logIn', authController_1.logIn);

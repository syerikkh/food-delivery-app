"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.signUp = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.User.find();
        res.send(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get users" });
    }
});
exports.getUsers = getUsers;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phoneNumber, role } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const createUser = yield userModel_1.User.create({ name, email, password: hashedPassword, phoneNumber, role });
        res.status(200).json({ message: `${createUser.email} created successfully` });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: "User creation failed" });
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield userModel_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Email not found" });
        }
        if (!user.password) {
            return res.status(400).json({ error: "Type your password" });
        }
        const checkPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({ messaage: "Invalid Password" });
        }
        res.status(200).json({ message: "Successfully logged in" });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: "Log in failed" });
    }
});
exports.logIn = logIn;
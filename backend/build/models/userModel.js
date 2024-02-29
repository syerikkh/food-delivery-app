"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.User = mongoose_1.default.model("User", new mongoose_2.Schema({
    name: String, email: { type: String, unique: true }, password: String, phoneNumber: String, id: mongodb_1.ObjectId, role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
}));

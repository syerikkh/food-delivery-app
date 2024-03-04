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
exports.createFood = exports.getFoods = void 0;
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const foodModel_1 = require("../models/foodModel");
const getFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getFoods = getFoods;
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, image, ingredient, price } = req.body;
    const foodImage = req.file;
    if (!foodImage) {
        return res.status(400).json({ message: "Please upload file" });
    }
    try {
        const newFoodImage = yield cloudinary_1.default.uploader.upload(foodImage.path);
        const createdFood = yield foodModel_1.Food.create({ name, image: newFoodImage.secure_url, ingredient, price });
        res.status(200).json({ message: "Successfully created", createdFood });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create food' });
    }
});
exports.createFood = createFood;

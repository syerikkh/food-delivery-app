import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export const User = mongoose.model("User", new Schema({
    name: String, email: { type: String, unique: true }, password: String, phoneNumber: String, id: ObjectId, role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
}));
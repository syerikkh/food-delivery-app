import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export const UserModel = mongoose.model("User", new Schema({
    name: String, email: String, password: String, phoneNumber: Number, id: ObjectId, role: {
        type: String,
        enum: ["Admin", "Customer"]
    }
}));
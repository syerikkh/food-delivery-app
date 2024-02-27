import express from 'express';
import { UserModel } from '../models/userModel';

export const getUsers = async (req: express.Request, res: express.Response) => {
    const users = UserModel.find();
    res.send(users);
}

export const createUser = async (req: express.Request, res: express.Response) => {
    const user = await UserModel.create({ name: "Syerik", email: "ss@gmail.com", password: '1234', phoneNumber: 929292, role: "Customer" });
    res.send(user);
}
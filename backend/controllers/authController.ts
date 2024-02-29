import express from 'express';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt';

export const getUsers = async (req: express.Request, res: express.Response) => {
    const users = await User.find();
    res.send(users);
}
export const signUp = async (req: express.Request, res: express.Response) => {
    const { name, email, password, phoneNumber, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = await User.create({ name, email, password: hashedPassword, phoneNumber, role });
        res.status(201).json({ message: `${createUser.name} created successfully` });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "User creation failed" })
    }
}

export const logIn = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Email not found" })
        }
        if (!user.password) {
            return res.status(400).json({ error: "Type your password" })
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return res.status(400).json({ messaage: "Invalid Password" })
        }
        res.status(201).json({ message: "Successfully logged in" })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Log in failed" })
    }

}
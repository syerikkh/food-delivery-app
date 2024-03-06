import express from 'express';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY as string;

export const getUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get users" });
    }
}

export const verifyAccessToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authToken = req.headers['authorization'];
    if (!authToken) {
        return res.status(401).json({ error: "Token not found" })
    }
    jwt.verify(authToken, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid token" })
        }
        req.body.userId = decoded.id;
        return next();
    })
}
export const signUp = async (req: express.Request, res: express.Response) => {
    const { name, email, phoneNumber, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = await User.create({ name, email, phoneNumber, password: hashedPassword });
        res.status(200).json({ message: `${createUser.email} created successfully` });
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

        const accessToken = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1d' })

        res
            .status(200)
            .cookie('refreshToken', refreshToken)
            .header('authToken', accessToken)
            .send({ user, message: 'Successfully logged in' })

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Log in failed" })
    }

}
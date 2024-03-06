import { Category } from "../models/categoryModel";
import { Request, Response } from 'express';

export const createCategory = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const category = await Category.create({ name });
        res.status(201).json({ message: "Succeessfully created category", category })
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to create category" })
    }
}
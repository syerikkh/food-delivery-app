import { Category } from "../models/categoryModel";
import { Request, Response } from 'express';


export const getCategories = async (req: Request, res: Response) => {
    try {
        const category = await Category.find();
        res.send(category)
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to get category" })
    }
}

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
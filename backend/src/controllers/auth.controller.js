import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from '../utils/jwt.js';

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            res.status(400);
            throw new Error('All fields are required!');
        }

        const userExists = await User.findOne({ email });
        if(userExists) {
            res.status(400);
            throw new Error('User already exists!');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (error) {
        next(error)
    };
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user) {
            res.status(401);
            throw new Error('Invalid credentials')
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            res.status(401);
            throw new Error('Invalid credentials')
        }

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } catch (error) {
        next(error);
    };
};
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../../prisma/clientConnection';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local'});

export default async function Login(req: NextApiRequest, res: NextApiResponse) {

    console.log("---------------------Logging in-------------------------")
    const { username, password } = req.body;

    const user = await prisma.adminUser.findUnique({
        where: {
            username: username
        }
    });

    const match = await bcrypt.compare(password, user.password);
    if (match) {
        const token = await jwt.sign({ username }, process.env.TOKEN_SECRET as string, { expiresIn: 15 });
        return res.status(200).json({ token: `BEARER ${ token }`, message: 'successfully logged in'});
    }
    return res.status(401).json({message: "log in failed!"});
}


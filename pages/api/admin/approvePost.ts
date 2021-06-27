import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../prisma/clientConnection";

export default async function approvePost(req: NextApiRequest, res: NextApiResponse) {

    const { postId } = req.body;
    try {

        const updatePost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                verified: true
            }
        });

        res.status(200).json({message: "post verified!"});

    } catch (err) {
        res.status(500).json({ message: "server error!"})
    }


}
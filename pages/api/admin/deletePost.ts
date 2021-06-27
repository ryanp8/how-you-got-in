import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../prisma/clientConnection";

export default async function approvePost(req: NextApiRequest, res: NextApiResponse) {

    const { postId } = req.body;

    try {

        const deletePost = await prisma.post.delete({
            where: {
                id: postId
            }
        });

        console.log(postId)

        res.status(200).json({message: "post deleted!"});

    } catch (err) {
        res.status(500).json({ message: "server error!"})
    }


}
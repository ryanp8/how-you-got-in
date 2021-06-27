import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../prisma/clientConnection";


export default async function getUnverifiedPosts(req: NextApiRequest, res: NextApiResponse) {

    try {
        const data = await prisma.post.findMany({
            where: {
                verified: false
            },
            take: 20
        });
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
        res.status(500).end();
    }
}
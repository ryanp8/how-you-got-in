import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../prisma/clientConnection";


export default async function getVerifiedPosts(req: NextApiRequest, res: NextApiResponse) {

    const { query: searchQuery, satFilter, actFilter, gpaFilter, satScore, actScore, gpa, page } = req.query;

    let orders = [];
    if ((satFilter as string) === 'true') orders.push({ satScore: 'desc' });
    if ((actFilter as string) === 'true') orders.push({ actScore: 'desc' });
    if ((gpaFilter as string) === 'true') orders.push({ weightedGpa: 'desc' });

    const skip = page ? parseInt(page as string) * 20 : 0;

    try {
        const data = await prisma.post.findMany({
            where: {
                school: {
                    contains: (searchQuery as string) || ''
                },
                satScore: {
                    lte: parseInt(satScore as string)
                },
                actScore: {
                    lte: parseInt(actScore as string)
                },
                weightedGpa: {
                    lte: parseInt(gpa as string)
                },
                verified: true
            },
            orderBy: orders,
            take: 20,
            skip: page ? parseInt(page as string) * 20 : 0
        });

        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
}
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../prisma/clientConnection";

export default async function submitForm(req: NextApiRequest, res: NextApiResponse) {

    const { school, highSchool, apScores, satScore, actScore, gpa, extracurriculars, comment } = req.body;

    try {
        await prisma.post.create({
            data: {
                school,
                highSchool,
                apScores,
                satScore: satScore ? parseInt(satScore) : -1,
                actScore: actScore ? parseInt(actScore) : -1,
                weightedGpa: gpa ? parseInt(gpa) : -1,
                extracurriculars,
                comment,
                verified: false
            }
        })
    
        res.status(200).json({ message: "success!" });
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }

}
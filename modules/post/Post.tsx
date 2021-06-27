import { useState } from 'react';
import { Box, Heading, HStack, VStack, Container } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

import { PostSchema } from '../../types';
import { Card } from '../../ui/Card';

interface PostProps {
    post: PostSchema;
    admin: boolean;
}

export const Post: React.FC<PostProps> = ({ post, admin }) => {

    const [checked, setChecked] = useState(false);

    const verifyPost = async () => {
        await fetch("/api/admin/approvePost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postId: post.id })
        });
        setChecked(true);
    }

    const deletePost = async () => {
        await fetch("/api/admin/deletePost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postId: post.id })
        });
        setChecked(true);
    }


    return (
        <>
            { checked ? <></> : (
                <Card>
                    <VStack spacing={6}>
                        {admin && <Heading color="gray.500" size="xs" width="full">{post.id}</Heading>}
                        <Heading color="gray.600" size="sm" width="full">
                            School:
                                <Box as="span" color="teal.400" marginLeft="5" fontSize="xl">
                                {post.school}
                            </Box>
                        </Heading>

                        <Box width="full">
                            <Heading color="gray.600" size="sm" width="full">High school: </Heading>
                            <Box>
                                {post.highSchool || "No high school provided"}
                            </Box>
                        </Box>

                        <Heading color="gray.600" size="sm" width="full">
                            SAT Score:
                                <Box as="span" color="gray.500" marginLeft="5">
                                {post.satScore === -1 ? "No score" : post.satScore }
                            </Box>
                        </Heading>
                        <Heading color="gray.600" size="sm" width="full">
                            ACT Score:
                                <Box as="span" color="gray.500" marginLeft="5">
                                {post.actScore === - 1 ? "No score" : post.actScore }
                            </Box>
                        </Heading>
                        <Heading color="gray.600" size="sm" width="full">
                            Weighted GPA:
                                <Box as="span" color="gray.500" marginLeft="5">
                                {post.weightedGpa  === -1 ? "No score" : post.weightedGpa }
                            </Box>
                        </Heading>

                        <Box width="full">
                            <Heading color="gray.600" size="sm" width="full">AP Scores: </Heading>
                            <Box>
                                {post.apScores || "No AP scores provided"}
                            </Box>
                        </Box>

                        <Box width="full">
                            <Heading color="gray.600" size="sm" width="full">Extracurriculars: </Heading>
                            <Box>
                                {post.extracurriculars || "No extracurriculars"}
                            </Box>
                        </Box>

                        <Box width="full">
                            <Heading color="gray.600" size="sm" width="full">Additional comments: </Heading>
                            <Box>
                                {post.comment || "No additional comments"}
                            </Box>
                        </Box>

                        {admin && <HStack spacing={15}>
                            <CheckIcon color="green.500" cursor="pointer" onClick={verifyPost} />
                            <DeleteIcon color="red.500" cursor="pointer" onClick={deletePost} />
                        </HStack>}
                    </VStack>
                </Card>
            )}
        </>
    )
}
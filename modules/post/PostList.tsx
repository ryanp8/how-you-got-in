import { useState } from 'react';
import { VStack, Button, Box, Flex, Heading } from "@chakra-ui/react";
import { Post } from "../post/Post";
import { usePosts } from '../../hooks/usePosts';
import { SkeletonCard } from '../../ui/SkeletonCard';


interface PostListProps {
    verified: boolean;
    admin: boolean;
}

export const PostList: React.FC<PostListProps> = ({ verified, admin }) => {

    const [page, setPage] = useState(0);
    const [isLoading, posts] = usePosts(verified, page);

    return (
        <>
            {
                isLoading && page === 0 ?
                    <VStack spacing={8} width="full">
                        {Array(5).fill('').map((_, idx) => {
                            return <SkeletonCard key={idx} />
                        })}
                    </VStack>
                    :
                    <VStack
                        spacing={8}
                        width="full"
                    >
                        {posts.length > 0 ?
                            <>
                                {posts.map((post, idx) => {
                                    return <Post key={idx} post={post} admin={admin} />
                                })}
                                <Button colorScheme="teal" isLoading={isLoading} loadingText="Loading more" onClick={() => { setPage(page + 1) }}>Load more</Button>
                            </>
                            :
                            <Heading as="h1" size="lg" fontWeight="md">No results found.</Heading>
                        }

                    </VStack>
            }
        </>
    );
}
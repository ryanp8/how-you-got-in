
import { VStack, Box, Heading } from "@chakra-ui/react";
import { PostList } from "../post/PostList";

interface AdminPostsProps {
}

export const AdminPosts: React.FC<AdminPostsProps> = ({ }) => {

    return (
        <VStack width="full" spacing={ 8 }>
            <Box width="full">
                <Heading marginBottom="6" size="md" textAlign="center" color="gray.600">Unverified</Heading>
                <PostList verified={false} admin={ true }/>
            </Box>
            <Box width="full">
                <Heading marginBotton="6" size="md" textAlign="center" color="gray.600">Verified</Heading>
                <PostList verified={true} admin={ true } />
            </Box>
        </VStack>
    )
}

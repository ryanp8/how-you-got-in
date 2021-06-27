import {
    VStack,
    Flex,
    Box
} from "@chakra-ui/react";
import { Navbar } from "../ui/Navbar";
import { Sidebar } from "../ui/Sidebar";
import { Footer } from "../ui/Footer";

interface PostsPageProps {
    admin: boolean;
}

export const PostsPage: React.FC<PostsPageProps> = ({ children, admin }) => {

    return (
        <>
            {/* // <VStack width="full"> */}
            <Navbar admin={admin} />
            <Flex width="full" alignItems="flex-start" marginTop="24">
                <Sidebar admin={admin} />
                <VStack spacing={6} flex="1">
                    {children}
                </VStack>
            </Flex>
            <Box marginTop="24">
                <Footer />
            </Box>
            {/* // </VStack> */}
        </>
    )
}
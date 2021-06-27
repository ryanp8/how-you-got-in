import MediaQuery, { useMediaQuery } from 'react-responsive';
import { Flex, Container, Box, Heading, Button, HStack } from "@chakra-ui/react";

import { Searchbar } from './Searchbar';
import { SearchModal } from './SearchModal';
import { MobileMenu } from './MobileMenu';
import { useEffect } from 'react';


interface NavbarProps {
    admin: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ admin }) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    useEffect(() => {
        console.log(isTabletOrMobile);
    })

    const logOut = () => {
        document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        location.href = "/admin/login";
    }

    return (
        <Box width="full" backgroundColor="white" borderColor="gray.200" shadow="sm" zIndex="1" position="fixed" top="0">
            <Flex maxW="container.2xl" p="4" justify="space-between" alignItems="center">
                <Heading as="h1" size="md" marginLeft="10" color="gray.600" letterSpacing="wider">HowYouGotIn{admin && <Heading as="span" size="md" color="teal">Admin{admin}</Heading>}</Heading>
                <MediaQuery maxWidth="768px">
                    <HStack spacing={8}>
                        <SearchModal />
                        <MobileMenu />
                    </HStack>
                </MediaQuery>
                <MediaQuery minWidth="769px">
                    <Searchbar />
                </MediaQuery>
                {admin && <Button size="sm" variant="outline" colorScheme="teal" onClick={logOut}>Log out</Button>}
            </Flex>
        </Box>
    )
}
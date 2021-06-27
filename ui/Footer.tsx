import { Circle, Text, Flex, HStack, VStack, Heading } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <Flex justify="center" align="center" width="full" paddingY="10" backgroundColor="gray.700">
            <VStack spacing={8}>
                <Heading as="h1" size="lg" fontWeight="md" letterSpacing="wider" color="white">HowYouGotIn</Heading>
                <HStack spacing={6}>
                    {/* <Circle p="2" border="1px" borderColor="white">
                        <EmailIcon boxSize={18} color="white" />
                    </Circle> */}
                    <Circle p="2" border="1px" borderColor="white">
                        <FaInstagram size={18} color="white" />
                    </Circle>
                </HStack>
                <Heading as="h1" size="sm" fontWeight="md" color="white">Contact: howyougotin@gmail.com</Heading>
                <Heading as="h1" size="sm" fontWeight="md" color="white">&copy; 2021 All rights reserved. <Text as="span" color="teal.400">How You Got In</Text></Heading>
            </VStack>
        </Flex>

    )
}
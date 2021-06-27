import { Container, Box } from '@chakra-ui/react';

interface CardProps {

}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <Container maxW="container.lg">
            <Box shadow="md" borderWidth="1px" borderRadius="md" p="6">
                { children }
            </Box>
        </Container>
    )
}
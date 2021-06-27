import { Container, Flex, FormLabel, Input, Button } from '@chakra-ui/react';

interface RegisterProps {

}

export const RegisterPage: React.FC<RegisterProps> = () => {

    return (
        <Flex flex="1" alignItems="center">
            <Container size="container.sm" border="1px" borderColor="gray.400" borderRadius="md" shadow="md" p="6">
                <form>
                    <FormLabel>Username: </FormLabel>
                    <Input colorScheme="teal"></Input>
                    <FormLabel>Password: </FormLabel>
                    <Input colorScheme="teal"></Input>
                    <Button type="submit">Login as admin</Button>
                </form>
            </Container>
        </Flex>
    )

}
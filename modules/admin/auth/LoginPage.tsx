import { useRouter } from 'next/router';
import { Container, Flex, FormLabel, Input, Box, Button, VStack,  } from '@chakra-ui/react';
import { useForm } from "react-hook-form";

import { FormError } from "../../../ui/FormError";

interface LoginPageProps {

}

interface LoginFormData {
    username: string;
    password: string;
}


export const LoginPage: React.FC<LoginPageProps> = () => {

    const { handleSubmit, register, formState: { errors } } = useForm<LoginFormData>();
    const router = useRouter();

    const onSubmit = async (data: LoginFormData) => {

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await res.json();
        if (json.token) {
            const token = json.token.split(' ')[1];
            document.cookie = `accessToken=${token}; max-age=3600`;
            location.href = "/admin";
        }   
    }

    return (
        <Flex flex="1" alignItems="center">
            <Container size="container.sm" border="1px" borderColor="gray.400" borderRadius="md" shadow="md" p="6">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <VStack alignItems="flex-start" spacing={6}>
                        <Box width="full">
                            <FormLabel>Username: </FormLabel>
                            <Input 
                                colorScheme="teal" 
                                autoComplete="off"
                                {...register("username", {
                                    required: { value: true, message: "Enter a username"}
                                })}
                            ></Input>
                            { errors.username && errors.username.message && <FormError>{ errors.username.message }</FormError>}
                        </Box>
                        <Box width="full">
                            <FormLabel>Password: </FormLabel>
                            <Input 
                                colorScheme="teal"
                                type="password"
                                {...register("password", {
                                    required: { value: true, message: "Password is required"}
                                })}
                            ></Input>
                            { errors.password && errors.password.message && <FormError>{ errors.password.message }</FormError>}
                        </Box>
                        <Button colorScheme="teal" type="submit">Login as admin</Button>
                    </VStack>
                </form>
            </Container>
        </Flex>
    )
}
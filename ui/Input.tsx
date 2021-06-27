import { Input as ChakraInput } from "@chakra-ui/react";

interface InputProps {

}

export const Input: React.FC<InputProps> = () => {
    return (
        <ChakraInput width="full" variant="flushed" />
    )
}
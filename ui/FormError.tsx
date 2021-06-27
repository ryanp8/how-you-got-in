import { Flex } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";


interface FormErrorProps {

}

export const FormError: React.FC<FormErrorProps> = ({ children }) => {
    return (
        <Flex alignItems="center" color="red.400" size="xs"><WarningIcon color="red" boxSize={ 3 } />{' '}{ children }</Flex>
    )    
}
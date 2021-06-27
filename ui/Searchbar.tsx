import { useContext, Dispatch, SetStateAction } from "react";
import { InputGroup, InputLeftAddon, Input, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useMediaQuery } from 'react-responsive';


import { QueryContext } from "../contexts/useQueryContext";

export const Searchbar: React.FC = () => {

    const { setQuery } = useContext(QueryContext);

    return (
        <InputGroup maxW="lg">
            <InputLeftAddon p="6" backgroundColor="white">
                <SearchIcon color="teal.400" boxSize={4} />
            </InputLeftAddon>
            <Input placeholder="Search for a school" p="6" focusBorderColor="teal.400" onChange={e => { (setQuery as Dispatch<SetStateAction<string>>)(e.target.value) }} />
        </InputGroup>
    )
}


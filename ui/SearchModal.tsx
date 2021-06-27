import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"

import { Searchbar } from './Searchbar';

export const SearchModal: React.FC = () => {

    const { onOpen, isOpen, onClose } = useDisclosure();

    return (
        <>
            <SearchIcon boxSize="5" onClick={onOpen} color="gray.500" cursor="pointer" />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Searchbar />
                </ModalContent>
            </Modal>
        </>
    )

}
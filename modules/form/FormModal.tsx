import { Button,Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import { MainForm } from "./MainForm";

export const FormModal: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}><EditIcon boxSize={6} color="white" />Add an entry</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW="container.lg">
                    <ModalHeader>How you got in: </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MainForm closeModal={ onClose }/>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
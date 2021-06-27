import { Drawer, DrawerOverlay, VStack, useDisclosure, DrawerContent } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { FormModal } from '../modules/form/FormModal';
import { FilterMenu } from "../modules/form/FilterMenu";

export const MobileMenu: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            { isOpen ? <CloseIcon boxSize="4" color="gray.700" onClick={onClose} /> : <HamburgerIcon boxSize="6" color="gray.500" cursor="pointer" onClick={onOpen} />}
            <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="xs">
                <DrawerContent shadow="xl">
                    <VStack marginTop="10" width="full" spacing={8} >
                        <FormModal />
                        <FilterMenu />
                    </VStack>
                </DrawerContent>
            </Drawer>

        </>
    )
} 
import { Button, Container, Box, Heading, VStack, Checkbox } from "@chakra-ui/react"
import { useMediaQuery } from 'react-responsive';

import { FormModal } from "../modules/form/FormModal";
import { FilterMenu } from '../modules/form/FilterMenu';

interface SidebarProps {
    admin: boolean;
}


export const Sidebar: React.FC<SidebarProps> = ({ admin }) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            {!isTabletOrMobile && <Container maxW={["xs"]} position="sticky" top="24">
                <VStack marginX="10" spacing={8}>
                    <Box width="full">
                        <FormModal />
                    </Box>
                    <FilterMenu />
                </VStack>
            </Container>
            }
        </>
    )
}
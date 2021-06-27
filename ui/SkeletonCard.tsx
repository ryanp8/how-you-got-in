import { SkeletonText } from '@chakra-ui/react';
import { Card } from "./Card";

interface SkeletonCardProps {

}

export const SkeletonCard: React.FC<SkeletonCardProps> = () => {
    return (
        <Card>
            <SkeletonText mt="4" noOfLines={10} spacing="4" width="full" />
        </Card>
    )
}
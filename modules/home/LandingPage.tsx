import {
    VStack,
    Flex,
} from "@chakra-ui/react";

import { PostsPage } from '../../layouts/PostsPage';
import { PostList } from '../post/PostList';


interface LandingPageProps {

}


export const LandingPage: React.FC<LandingPageProps> = () => {


    return (
        <PostsPage admin={ false }>
            <PostList verified={true}  admin={ false }/>
        </PostsPage>
    )
}
import { AdminPosts } from "./AdminPosts";
import { PostsPage } from '../../layouts/PostsPage';

interface AdminHomePageProps {
    authenticated: boolean;
}

export const AdminHomePage: React.FC<AdminHomePageProps> = ({ authenticated }) => {

    return (
        <PostsPage admin={ true }>
            <AdminPosts />
        </PostsPage>
    )
}
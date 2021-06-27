import { GetServerSideProps } from 'next';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { AdminHomePage } from '../../modules/admin/AdminHomePage';

export default AdminHomePage;


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    dotenv.config();

    const {accessToken} = ctx.req.cookies;

    const redirect =  {
        destination: '/admin/login',
        permanent: false
    }
    
    if (!accessToken) {
        return {
            redirect
        }
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN as string, (err, decoded) => {
        if (err) return {
            redirect
        };
    })

    return {
        props: {
            authenticated: false
        },
    };
}
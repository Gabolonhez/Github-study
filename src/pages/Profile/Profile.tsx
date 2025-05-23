import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Table} from "../../components/Table/Table";
import { useParams, useNavigate } from "react-router-dom";

const Profile = ()=> {

    const navigate = useNavigate();
    const { user } = useParams<{user: string}>();

    console.log("Profile - user from URL:", user);
    console.log("Profile - user !== 'gab' (case-insensitive):", user?.toLowerCase() !== 'gab');

    if (user?.toLowerCase() !== 'gab') {
        navigate("/");
    }

    return (
        <Layout>
            <Table/>
        </Layout>
    )
} 

export { Profile };
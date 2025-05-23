import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Table } from "../../components/Table/Table";
import { useParams, useNavigate } from "react-router-dom";
import { gitApi } from "../../api/github";
import { GithubUser } from "../../api/types/github"; 

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useParams<{ user: string }>(); 

    const  courses = [
           {   
            tech: "React",
            type: "Frontend"
        },
         {   
            tech: "Angular",
            type: "Frontend"
        },
         {   
            tech: "Node",
            type: "Backend"
        },
    ]
    

    const [profileData, setProfileData] = useState<GithubUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!user) { 
                navigate('/'); 
                return;
            }

            try {
                setIsLoading(true);
                setError(null); 
                const response = await gitApi.getUser(user);
                setProfileData(response); 
            } catch (err: any) {
                console.error("Erro ao buscar perfil:", err);
                setError("Usuário não encontrado.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, [user, navigate]); 

    if (isLoading) {
        return (
            <Layout>
                <div>Carregando perfil de {user}...</div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="text-danger">
                    <p>{error}</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Voltar para o Login</button>
                </div>
            </Layout>
        );
    }

    if (!profileData) {
  
        return (
            <Layout>
                <div className="text-danger">
                    <p>Perfil não disponível.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Voltar para o Login</button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <h1>Perfil de {profileData.name || profileData.login}</h1>
            <p>ID: {profileData.id}</p>
            <p>Repositórios Públicos: {profileData.public_repos}</p>
            {profileData.bio && <p>Bio: {profileData.bio}</p>}
            <img src={profileData.avatar_url} alt={`Avatar de ${profileData.login}`} style={{ width: '100px', borderRadius: '50%' }} />
            <Table data={courses} /> 
        </Layout>
    );
};

export { Profile };
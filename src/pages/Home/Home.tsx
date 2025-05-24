import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { useNavigate } from 'react-router-dom';
import { MouseEvent, useState } from "react";
import { gitApi } from "../../api/github"; 

const Home = () => {

    const [user, setUser] = useState('');
    const [invalid, setInvalid] = useState(false);

    const navigate = useNavigate();

    const handleClick = async (event: MouseEvent) => {
        event.preventDefault();
        setInvalid(false); 

        if (user.length === 0) {
            alert("Informe o usuário do Github");
            setInvalid(true); 
            return;
        }

        try {
            const response = await gitApi.getUser(user); 
            
            navigate(`/${response.login}`); 
            
        } catch (error: any) { 

            
            setInvalid(true); 
            alert("Usuário não encontrado. Verifique o nome e tente novamente.");
        }
    }; 

    return (
        <Layout>
            <div className="col-4 m-auto">
                <h1 className="mt-5">Login</h1>
                <div className="mb-3">
                    <label htmlFor="gitUser" className="form-label">Usuário do Github</label>
                    <input 
                    type="text" 
                    aria-label="User" 
                    className="form-control" 
                    id="gitUser" 
                    aria-describedby="userHelp" 
                    placeholder="Informe o usuário do seu Github"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                    />
                    {
                        invalid && ( 
                            <div id="userHelp" className="form-text text-danger"> 
                                Usuário inválido!
                            </div>
                        )
                    }
                </div>
                <button onClick={handleClick} type="button" className="btn btn-primary">Entrar</button>
            </div>
        </Layout>
    );
}; 

export { Home };
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { useNavigate } from 'react-router-dom';
import { MouseEvent, useState } from "react";

const Home = () => {

    const [user, setUser] = useState('')

    const navigate = useNavigate();

    const handleClick = async (event: MouseEvent) => {
        event.preventDefault();
        if (user.length === 0) {
            alert("Informe o usuário do Github")
            return
        }

        navigate(`/${user}`)
    }


    return (
        <Layout>
            <div className="col-4 m-auto">
                <h1>Login</h1>
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
                    <div id="userHelp" className="form-text">
                    </div>
                </div>
                <button onClick={handleClick} type="button" className="btn btn-primary">Entrar</button>
            </div>
        </Layout>
    )
} 

export { Home };
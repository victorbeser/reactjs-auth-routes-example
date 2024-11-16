import React, { useState } from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const AcessoPage = () => {

    const { login } = useAuth();
    const [userName, setUserName] = useState('');
    const nav = useNavigate();

    const handleLogin = () => {

        login({name: userName});
        nav('/painel');

    };

    return(
        <div>
            <h2>Página de Acesso</h2>
            <input type="text" placeholder="Seu user..." value={userName} onChange={(e) => {setUserName(e.target.value)}} />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );

};

export default AcessoPage;
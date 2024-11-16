import React from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PainelPage = () => {

    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }

    return(
        <div>
            <h2>Página de Painel</h2>
            <br />
            <h3>Olá, {user.name}</h3>
        </div>
    );

};

export default PainelPage;
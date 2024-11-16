import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AcessoPage from "../Pages/Acesso/Acesso";
import PainelPage from "../Pages/Painel/Painel";

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AcessoPage />} />
                <Route path="/painel" element={<PainelPage />} />
            </Routes>
        </BrowserRouter>
    );

};

export default AppRoutes;
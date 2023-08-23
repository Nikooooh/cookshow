import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Componentes/Header/Header';
import QuemSomos from './Componentes/Routes/QuemSomos';
import Footer from './Componentes/Footer/Footer';
import Termos from './Componentes/Routes/Termos';
import Privacidade from './Componentes/Routes/Privacidade';
import Perfil from './Componentes/Routes/Perfil';
import Favoritos from './Componentes/Routes/Favoritos';
import FaleConosco from './Componentes/Routes/FaleConosco';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/perfil" element={<Perfil />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
);


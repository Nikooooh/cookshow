import React from 'react';
import Logo from '../../Imagens/Logo.png';

function Footer() {
    return (
        <footer className="bg-white text-black p-5 fixed bottom-0 w-full">
            <div className="container mx-auto text-center">
                <div className="mb-2">
                    © 2023 CookShow {/*<img src={Logo} alt="CookShow Logo" className="h-12 w-auto inline-block" />*/}
                </div>
                <div className="mb-2">
                    Cozinhe do seu jeito!
                </div>
                <div>
                    <a href="#" className="mx-2 hover:text-orange-500">Quem Somos</a>
                    <a href="#" className="mx-2 hover:text-orange-500">Termos</a>
                    <a href="#" className="mx-2 hover:text-orange-500">Privacidade</a>
                    <a href="#" className="mx-2 hover:text-orange-500">Fale Conosco</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

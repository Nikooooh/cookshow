import React, { useState } from 'react';
import { UserIcon, StarIcon, LogoutIcon } from '@heroicons/react/solid';

function Header() {
    // Estado para controlar a visibilidade do menu no modo mobile
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white text-black p-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl md:text-4xl font-bold font-orelega">
                        <span className="text-orange-500">Cook</span>
                        <span className="text-black">Show</span>
                    </h1>
                    {/* Menu mobile (visível apenas em telas pequenas) */}
                    <div className="relative md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="z-20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 md:h-8 md:w-8 text-orange-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                        <div className={`absolute right-0 mt-2 z-10 bg-white rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
                            <a href="#" className="block px-4 py-2 text-center">
                                <UserIcon className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 text-orange-500" />
                                Perfil
                            </a>
                            <a href="#" className="block px-4 py-2 text-center">
                                <StarIcon className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 text-orange-500" />
                                Favoritos
                            </a>
                            <a href="#" className="block px-4 py-2 text-center">
                                <LogoutIcon className="h-4 w-4 md:h-5 md:w-5 mx-auto mb-1 text-orange-500" />
                                Sair
                            </a>
                        </div>
                    </div>
                    {/* Menu para desktop (visível apenas em telas maiores) */}
                    <div className="hidden md:flex">
                        <a href="#" className="mx-3 text-center">
                            <UserIcon className="h-5 w-5 md:h-8 md:w-8 mx-auto mb-1 text-orange-500" />
                            Perfil
                        </a>
                        <a href="#" className="mx-3 text-center">
                            <StarIcon className="h-5 w-5 md:h-8 md:w-8 mx-auto mb-1 text-orange-500" />
                            Favoritos
                        </a>
                        <a href="#" className="mx-3 text-center">
                            <LogoutIcon className="h-5 w-5 md:h-8 md:w-8 mx-auto mb-1 text-orange-500" />
                            Sair
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;








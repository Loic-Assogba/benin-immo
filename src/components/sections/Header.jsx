import { useState } from 'react';
import { Menu, X, ArrowUpRight, UserLock } from 'lucide-react';

import Button from '../ui/Button';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* HEADER */}
            <header
                className="
                    fixed
                    top-0
                    left-0
                    w-full
                    z-50
                    bg-white/95
                    backdrop-blur-md
                    border-b
                    border-gray-100
                "
            >
                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                        h-20
                        flex
                        items-center
                        justify-between
                    "
                >
                    {/* Logo */}
                    <a href="/" className="shrink-0">
                        <h1 className="font-yeseva text-2xl">Benin Immo</h1>
                    </a>

                    {/* Navigation Desktop */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center gap-8 text-sm font-medium">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-gray-500 transition"
                                >
                                    Accueil
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/annonces"
                                    className="hover:text-gray-500 transition"
                                >
                                    Annonces
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-gray-500 transition"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-gray-500 transition"
                                >
                                    À propos
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Actions Desktop */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button>
                            Voir les annonces
                            <ArrowUpRight className="w-4 h-4" />
                        </Button>

                        <Button>
                            <UserLock className="w-4 h-4" />

                            <div className="flex items-center gap-1">
                                <a href="/login">Se connecter</a>

                                <span>/</span>

                                <a href="/signup">S'inscrire</a>
                            </div>
                        </Button>
                    </div>

                    {/* Bouton Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="
                            lg:hidden
                            bg-black
                            text-white
                            p-3
                            rounded-xl
                        "
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </header>

            {/* MENU MOBILE */}
            {isMenuOpen && (
                <div
                    className="
                        fixed
                        top-20
                        left-0
                        w-full
                        z-40
                        px-4
                        lg:hidden
                    "
                >
                    <nav
                        className="
                            bg-black
                            text-white
                            rounded-3xl
                            p-6
                            shadow-2xl
                            space-y-8
                        "
                    >
                        {/* Liens */}
                        <ul className="space-y-5 text-base font-medium">
                            <li>
                                <a
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Accueil
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/annonces"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Annonces
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    À propos
                                </a>
                            </li>
                        </ul>

                        {/* Boutons */}
                        <div className="bg-white rounded-2xl p-4 space-y-4">
                            <Button link="/login">
                                <UserLock className="w-4 h-4" />
                                Se connecter
                            </Button>

                            <Button link="/signup">
                                <UserLock className="w-4 h-4" />
                                S'inscrire
                            </Button>

                            <Button>
                                Voir les annonces
                                <ArrowUpRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </nav>
                </div>
            )}

            {/* Spacer pour éviter que le contenu passe sous le header */}
            <div className="h-20" />
        </>
    );
}

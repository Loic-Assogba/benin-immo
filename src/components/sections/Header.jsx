import { useState } from "react";
import { Menu, ArrowUpRight, UserLock } from "lucide-react";
import Button from "../ui/Button";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between p-4 lg:hidden">
                <a href="/">
                    <h1 className="font-yeseva text-lg">Benin Immo</h1>
                </a>
                <div className="flex items-center gap-2">
                    <Button>Voir les annonces <ArrowUpRight className="w-4 h-4" /></Button>
                    <Menu className="w-4 h-4" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </header>

            {isMenuOpen && (
                <nav className="bg-black text-white p-4 m-4 rounded-2xl space-y-8">
                    <ul className="space-y-4 text-xs">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/annonces">Annonces</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">À propos</a></li>
                    </ul>
                    <div className="bg-white p-4 space-y-4 rounded-xl">
                        <Button link="/login"><UserLock className="w-4 h-4" /> Se connecter</Button>
                        <Button link="/signup"><UserLock className="w-4 h-4" /> S'inscrire</Button>
                    </div>
                </nav>
            )}


            <header className="lg:flex items-center justify-between py-4 max-w-6xl mx-auto hidden">
                <a href="/">
                    <h1 className="font-yeseva text-xl">Benin Immo</h1>
                </a>
                <nav className=" ">
                    <ul className="flex items-center justify-center gap-x-4 text-xs">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/annonces">Annonces</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">À propos</a></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-2">
                    <Button>Voir les annonces <ArrowUpRight className="w-4 h-4" /></Button>
                    <Button><UserLock className="w-4 h-4" /> <a href="/login">Se connecter</a>/<a href="/signup">S'inscrire</a></Button>
                </div>
            </header>
        </>
    )
}
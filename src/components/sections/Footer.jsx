import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Top */}
                <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
                    {/* Brand */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xl">
                                IM
                            </div>

                            <div>
                                <h2 className="font-yeseva text-2xl">
                                    ImmoPrestige
                                </h2>

                                <p className="text-sm text-white/60">
                                    Immobilier haut de gamme
                                </p>
                            </div>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                            Nous accompagnons nos clients dans l’achat, la vente
                            et la location de biens immobiliers modernes et
                            sécurisés au Bénin.
                        </p>

                        {/* Socials */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="#"
                                className="
                                    bg-white/10
                                    hover:bg-white
                                    hover:text-black
                                    transition
                                    p-3
                                    rounded-xl
                                "
                            >
                                <Facebook className="w-5 h-5" />
                            </a>

                            <a
                                href="#"
                                className="
                                    bg-white/10
                                    hover:bg-white
                                    hover:text-black
                                    transition
                                    p-3
                                    rounded-xl
                                "
                            >
                                <Instagram className="w-5 h-5" />
                            </a>

                            <a
                                href="#"
                                className="
                                    bg-white/10
                                    hover:bg-white
                                    hover:text-black
                                    transition
                                    p-3
                                    rounded-xl
                                "
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Navigation
                        </h3>

                        <ul className="space-y-4 text-white/70">
                            {[
                                'Accueil',
                                'À propos',
                                'Nos biens',
                                'Services',
                                'Contact',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="
                                            hover:text-white
                                            transition
                                            flex
                                            items-center
                                            gap-2
                                            group
                                            w-fit
                                        "
                                    >
                                        <ArrowUpRight
                                            className="
                                                w-4
                                                h-4
                                                opacity-0
                                                -translate-x-2
                                                group-hover:opacity-100
                                                group-hover:translate-x-0
                                                transition
                                            "
                                        />

                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Nos services
                        </h3>

                        <ul className="space-y-4 text-white/70">
                            <li>Vente de maisons</li>
                            <li>Achat de terrains</li>
                            <li>Location d'appartements</li>
                            <li>Gestion immobilière</li>
                            <li>Conseils immobiliers</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold">Contact</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <Phone className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-sm text-white/50">
                                        Téléphone
                                    </p>

                                    <p className="font-medium">
                                        +229 01 XX XX XX XX
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <Mail className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-sm text-white/50">
                                        Email
                                    </p>

                                    <p className="font-medium">
                                        contact@immoprestige.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <MapPin className="w-5 h-5" />
                                </div>

                                <div>
                                    <p className="text-sm text-white/50">
                                        Adresse
                                    </p>

                                    <p className="font-medium">
                                        Cotonou, Bénin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-10" />

                {/* Bottom */}
                <div
                    className="
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-4
                        text-sm
                        text-white/50
                    "
                >
                    <p>
                        © {new Date().getFullYear()} ImmoPrestige. Tous droits
                        réservés.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition">
                            Politique de confidentialité
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Conditions d'utilisation
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

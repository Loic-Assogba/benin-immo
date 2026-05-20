import { useState } from 'react';
import Button from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
    const [formData, setFormData] = useState({
        nom: '',
        type: '',
        ville: '',
        budget: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
 Nouvelle demande de bien immobilier

 Nom : ${formData.nom}
 Type de bien : ${formData.type}
 Ville : ${formData.ville}
 Budget : ${formData.budget}
        `;

        const phoneNumber = '2290167566687';

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section
            className="
                min-h-[90vh]
                flex
                flex-col
                lg:flex-row
                lg:items-end
                gap-6
                lg:gap-10
                lg:max-w-7xl
                lg:mx-auto
                bg-[url('/hero.jpg')]
                bg-cover
                bg-center
                p-4
                sm:p-6
                lg:p-8
                mx-4
                overflow-hidden
            "
        >
            {/* Partie texte */}
            <article className="space-y-5 lg:w-2/3 flex flex-col justify-end">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full w-fit text-sm border border-white/20">
                    Plateforme immobilière moderne
                </span>

                <h2
                    className="
                        font-yeseva
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        leading-tight
                        text-white
                        max-w-3xl
                    "
                >
                    Achetez, louez et vendez vos biens immobiliers
                </h2>

                <p className="text-white/90 text-base sm:text-lg max-w-2xl">
                    Trouvez facilement des maisons, appartements, terrains et
                    bureaux adaptés à votre budget.
                </p>

                <div>
                    <Button>
                        Voir les annonces
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>
            </article>

            {/* Formulaire */}
            <form
                onSubmit={handleSubmit}
                className="
                    bg-gray-100/90
                    p-5
                    sm:p-6
                    rounded-2xl
                    shadow-2xl
                    w-full
                    lg:w-[400px]
                    space-y-4
                "
            >
                <div className="space-y-1">
                    <h3 className="font-semibold text-xl">
                        Recherchez votre bien
                    </h3>

                    <p className="text-gray-500 text-sm">
                        Remplissez le formulaire et contactez-nous directement
                        sur WhatsApp.
                    </p>
                </div>

                {/* Nom */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Votre nom</label>

                    <input
                        type="text"
                        name="nom"
                        placeholder="Ex: Samuel"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="
                            w-full
                            border
                            border-gray-200
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:ring-1
                            focus:ring-gray-400
                        "
                    />
                </div>

                {/* Type */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Type de bien</label>

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="
                            w-full
                            border
                            border-gray-200
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:ring-2
                            focus:ring-black
                            bg-white
                        "
                    >
                        <option value="">Choisir un type</option>
                        <option value="Maison">Maison</option>
                        <option value="Appartement">Appartement</option>
                        <option value="Terrain">Terrain</option>
                        <option value="Bureau">Bureau</option>
                    </select>
                </div>

                {/* Ville */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Ville</label>

                    <input
                        type="text"
                        name="ville"
                        placeholder="Ex: Cotonou"
                        value={formData.ville}
                        onChange={handleChange}
                        required
                        className="
                            w-full
                            border
                            border-gray-200
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:ring-2
                            focus:ring-black
                        "
                    />
                </div>

                {/* Budget */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Budget</label>

                    <input
                        type="text"
                        name="budget"
                        placeholder="Ex: 15 000 000 FCFA"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="
                            w-full
                            border
                            border-gray-200
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:ring-2
                            focus:ring-black
                        "
                    />
                </div>

                {/* Bouton */}
                <button
                    type="submit"
                    className="
                        w-full
                        bg-black
                        text-white
                        py-3
                        rounded-xl
                        font-medium
                        hover:opacity-90
                        transition
                    "
                >
                    Envoyer sur WhatsApp
                </button>
            </form>
        </section>
    );
}

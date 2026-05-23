import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        message: '',
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
 Nouvelle demande de contact

 Nom : ${formData.nom}
 Email : ${formData.email}

 Message :
${formData.message}
        `;

        const phoneNumber = '2290167566687';

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <div
                className="
                    max-w-7xl
                    mx-auto
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                "
            >
                {/* Partie gauche */}
                <article className="space-y-6">
                    <span className="bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-sm w-fit inline-block">
                        Contactez-nous
                    </span>

                    <h2
                        className="
                            font-yeseva
                            text-4xl
                            sm:text-5xl
                            leading-tight
                        "
                    >
                        Parlons de votre projet immobilier
                    </h2>

                    <p className="text-white/70 text-lg max-w-xl">
                        Vous recherchez une maison, un terrain ou un bureau ?
                        Notre équipe est disponible pour vous accompagner dans
                        toutes vos démarches immobilières.
                    </p>

                    {/* Infos */}
                    <div className="space-y-5 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 p-3 rounded-xl">
                                <Phone className="w-5 h-5" />
                            </div>

                            <div>
                                <p className="text-sm text-white/60">
                                    Téléphone
                                </p>
                                <p className="font-medium">
                                    +229 01 XX XX XX XX
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 p-3 rounded-xl">
                                <Mail className="w-5 h-5" />
                            </div>

                            <div>
                                <p className="text-sm text-white/60">Email</p>
                                <p className="font-medium">contact@immo.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 p-3 rounded-xl">
                                <MapPin className="w-5 h-5" />
                            </div>

                            <div>
                                <p className="text-sm text-white/60">Adresse</p>
                                <p className="font-medium">Cotonou, Bénin</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Formulaire */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        bg-white
                        text-black
                        p-6
                        sm:p-8
                        rounded-3xl
                        shadow-2xl
                        space-y-5
                    "
                >
                    <div>
                        <h3 className="text-2xl font-semibold">
                            Envoyez-nous un message
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                            Nous vous répondrons rapidement sur WhatsApp.
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
                                focus:ring-2
                                focus:ring-black
                            "
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Votre email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Ex: samuel@gmail.com"
                            value={formData.email}
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

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Votre message
                        </label>

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Décrivez votre besoin immobilier..."
                            value={formData.message}
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
                                resize-none
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
                            flex
                            items-center
                            justify-center
                            gap-2
                            hover:opacity-90
                            transition
                        "
                    >
                        Envoyer sur WhatsApp
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </section>
    );
}

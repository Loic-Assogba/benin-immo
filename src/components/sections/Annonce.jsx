import { BedDouble, Bath, MapPin, Heart, ArrowUpRight } from 'lucide-react';

const properties = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
        title: 'Villa moderne avec piscine',
        location: 'Cotonou, Fidjrossè',
        price: '250 000 000 FCFA',
        beds: 4,
        baths: 3,
        type: 'À vendre',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
        title: 'Appartement haut standing',
        location: 'Calavi, Arconville',
        price: '450 000 FCFA / mois',
        beds: 3,
        baths: 2,
        type: 'À louer',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
        title: 'Maison familiale spacieuse',
        location: 'Porto-Novo, Ouando',
        price: '95 000 000 FCFA',
        beds: 5,
        baths: 4,
        type: 'À vendre',
    },
];

export default function Listings() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div className="space-y-4 max-w-2xl">
                    <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                        Nos annonces
                    </span>

                    <h2 className="text-4xl sm:text-5xl font-yeseva leading-tight">
                        Découvrez les meilleurs biens immobiliers
                    </h2>

                    <p className="text-gray-500 text-base sm:text-lg">
                        Explorez des maisons, villas et appartements modernes
                        disponibles à la vente ou à la location partout au
                        Bénin.
                    </p>
                </div>

                <button
                    className="
                        flex
                        items-center
                        gap-2
                        bg-black
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        hover:opacity-90
                        transition
                        w-fit
                    "
                >
                    Voir toutes les annonces
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {properties.map((property) => (
                    <article
                        key={property.id}
                        className="
                            bg-white
                            rounded-3xl
                            overflow-hidden
                            shadow-lg
                            hover:-translate-y-2
                            transition
                            duration-300
                            group
                        "
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden h-72">
                            <img
                                src={property.image}
                                alt={property.title}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                    group-hover:scale-110
                                    transition
                                    duration-500
                                "
                            />

                            {/* Badge */}
                            <span
                                className="
                                    absolute
                                    top-4
                                    left-4
                                    bg-white
                                    text-black
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-medium
                                "
                            >
                                {property.type}
                            </span>

                            {/* Favorite */}
                            <button
                                className="
                                    absolute
                                    top-4
                                    right-4
                                    bg-white/90
                                    p-3
                                    rounded-full
                                    hover:bg-white
                                    transition
                                "
                            >
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold">
                                    {property.title}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-500">
                                    <MapPin className="w-4 h-4" />

                                    <span>{property.location}</span>
                                </div>
                            </div>

                            {/* Infos */}
                            <div className="flex items-center gap-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <BedDouble className="w-5 h-5" />

                                    <span>{property.beds} chambres</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Bath className="w-5 h-5" />

                                    <span>{property.baths} salles</span>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Prix
                                    </p>

                                    <h4 className="text-xl font-bold">
                                        {property.price}
                                    </h4>
                                </div>

                                <button
                                    className="
                                        bg-black
                                        text-white
                                        px-5
                                        py-3
                                        rounded-xl
                                        flex
                                        items-center
                                        gap-2
                                        hover:opacity-90
                                        transition
                                    "
                                >
                                    Détails
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

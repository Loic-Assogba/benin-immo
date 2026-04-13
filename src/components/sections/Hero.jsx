import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10 lg:max-w-6xl lg:mx-auto bg-[url('/hero.jpg')] bg-cover bg-center p-4 lg:p-8 mx-4 rounded-2xl">
            <article className="space-y-4 lg:w-2/3">
                <h2 className="font-yeseva text-4xl lg:text-6xl lg:text-white">Achetez, louez et vendez vos biens immobiliers</h2>
                <Button>Voir les annonces <ArrowUpRight className="w-4 h-4" /></Button>
            </article>
            <form action="" className="bg-white p-4 h-80 lg:h-100 rounded-xl lg:w-1/3">
                <h3 className="font-semibold">Recherchez les meilleurs biens dont vous avez besoins</h3>
            </form>
        </section>
    )
}
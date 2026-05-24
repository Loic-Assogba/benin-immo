import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Annonce from './components/sections/Annonce';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
    return (
        <main className="font-montserrat">
            <Header />
            <Hero />
            <Annonce />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;

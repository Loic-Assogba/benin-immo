import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Annonce from './components/sections/Annonce';
import { Contact } from './components/sections/Contact';

function App() {
    return (
        <main className="font-montserrat">
            <Header />
            <Hero />
            <Annonce />
            <Contact />
        </main>
    );
}

export default App;

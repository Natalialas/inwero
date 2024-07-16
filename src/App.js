import { Routes, Route } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import ApartmentPlans from './components/pages/ApartmentPlans/ApartmentPlans';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import RedirectPage from './components/pages/RedirectPage/RedirectPage';

function App() {
  return (
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-osiedlu" element={<About />} />
          <Route path="/rzuty" element={<ApartmentPlans />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import ApartmentPlans from './components/pages/ApartmentPlans/ApartmentPlans';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <main>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-osiedlu" element={<About />} />
          <Route path="/rzuty" element={<ApartmentPlans />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
   </main>
  );
}

export default App;

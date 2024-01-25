import { Container } from 'react-bootstrap'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Footer />
     </Container>
   </main>
  );
}

export default App;

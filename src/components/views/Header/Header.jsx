import NavBar from "../NavBar/NavBar";
import CarouselHeader from "../CarouselHeader/CarouselHeader";
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Container>
                <NavBar />
            </Container>
            <CarouselHeader />
        </div>
    );
  };

  export default Header;
import About from "../About/About";
import ApartmentPlans from "../ApartmentPlans/ApartmentPlans";
import Contact from "../Contact/Contact";
import styles from './Home.module.scss';
import CarouselHeader from "../../views/CarouselHeader/CarouselHeader";
import NavBar from "../../views/NavBar/NavBar";

const Home = () => {
    return (
        <div>
            <section className={styles.section}>
                <NavBar />
            </section>
            <section className={styles.section} id="home">
                <CarouselHeader />
            </section>
            <section className={styles.section} id="o-osiedlu">
                <About />
            </section>
            <section className={styles.section} id="rzuty">
                <ApartmentPlans />
            </section>
            <section className={styles.section} id="kontakt">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
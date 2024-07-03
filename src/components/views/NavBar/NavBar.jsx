import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './NavBar.module.scss';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const windowHeight = window.innerHeight;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;
                const bottomOffset = section.id === 'kontakt' ? 100 : 0;
                const topOffset = section.id !== 'kontakt' ? 70 : 0;

                if (window.scrollY + windowHeight >= sectionBottom - bottomOffset) {
                    setActiveSection(section.id);
                } else if (window.scrollY >= sectionTop - topOffset && window.scrollY < sectionBottom - windowHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" fixed="top" className={styles.navBar}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className={styles.iconLink}>
                        INWERO
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as="span">
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={100}
                                spy={true}
                                offset={-70}
                                className={`${styles.navLink} ${activeSection === 'home' ? styles.linkActive : ''}`}
                            >
                                HOME
                            </ScrollLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <ScrollLink
                                to="o-osiedlu"
                                smooth={true}
                                duration={100}
                                spy={true}
                                offset={-70}
                                className={`${styles.navLink} ${activeSection === 'o-osiedlu' ? styles.linkActive : ''}`}
                            >
                                O OSIEDLU
                            </ScrollLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <ScrollLink
                                to="rzuty"
                                smooth={true}
                                duration={100}
                                spy={true}
                                offset={-70}
                                className={`${styles.navLink} ${activeSection === 'rzuty' ? styles.linkActive : ''}`}
                            >
                                RZUTY MIESZKAŃ
                            </ScrollLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <ScrollLink
                                to="kontakt"
                                smooth={true}
                                duration={100}
                                spy={true}
                                offset={-70}
                                className={`${styles.navLink} ${activeSection === 'kontakt' ? styles.linkActive : ''}`}
                            >
                                KONTAKT
                            </ScrollLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

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
        <section className={styles.navBar}>
            <div className={styles.icon}>
                <Link to="/"> INWERO</Link>
             </div>
            <div className={styles.list}>
                <ul>
                    <li><ScrollLink to="home" smooth={true} duration={100} spy={true} offset={-70} className={activeSection === 'home' ? styles.linkActive : ''}>HOME</ScrollLink></li>
                    <li><ScrollLink to="o-osiedlu" smooth={true} duration={100} spy={true} offset={-70} className={activeSection === 'o-osiedlu' ? styles.linkActive : ''}>O OSIEDLU</ScrollLink></li>
                    <li><ScrollLink to="rzuty" smooth={true} duration={100} spy={true} offset={-70} className={activeSection === 'rzuty' ? styles.linkActive : ''}>RZUTY MIESZKAŃ</ScrollLink></li>
                    <li><ScrollLink to="kontakt" smooth={true} duration={100} spy={true} offset={-70} className={activeSection === 'kontakt' ? styles.linkActive : ''}>KONTAKT</ScrollLink></li>
                </ul>
            </div>
        </section>
    );
};

export default NavBar;
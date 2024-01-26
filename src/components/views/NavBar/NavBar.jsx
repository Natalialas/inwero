import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <section className={styles.navBar}>
            <div className={styles.icon}>
                <Link to="/"> INWERO</Link>
             </div>
            <div className={styles.list}>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">HOME</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/o-osiedlu">O OSIEDLU</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/rzuty">RZUTY MIESZKAŃ</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/kontakt">KONTAKT</NavLink></li>
                </ul>
            </div>
        </section>
    );
};

export default NavBar;
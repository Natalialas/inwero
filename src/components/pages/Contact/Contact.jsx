import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contactSection}>
            <h2>Kontakt</h2>
            <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                    <FaMapMarkerAlt className={styles.contactIcon} />
                    <p>Adres: ul. Przykładowa 123, 00-000 Warszawa</p>
                </div>
                <div className={styles.contactItem}>
                    <FaPhoneAlt className={styles.contactIcon} />
                    <p>Telefon: +48 123 456 789</p>
                </div>
                <div className={styles.contactItem}>
                    <FaEnvelope className={styles.contactIcon} />
                    <p>Email: kontakt@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
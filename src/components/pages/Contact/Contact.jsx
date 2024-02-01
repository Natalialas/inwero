import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>KONTAKT</h2>
                <div className={styles.contactItemInfo}>
                    <p><b>INWERO Robert Skulimowski</b></p>
                    <p>NIP: 741-143-61-45</p>
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt className={styles.contactIcon} />
                        <p>Adres: ul. Dąbrowskiego 46, 14-300 Morąg</p>
                    </div>
                    <div className={styles.contactItem}>
                        <FaPhoneAlt className={styles.contactIcon} />
                        <p>Telefon: +48 509 267 206</p>
                    </div>
                    <div className={styles.contactItem}>
                        <FaEnvelope className={styles.contactIcon} />
                        <p>Email: robertbiuro@interia.pl</p>
                    </div>
                </div>
            </div>
    );
};

export default Contact;
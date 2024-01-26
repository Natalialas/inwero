import styles from './ApartmentPlans.module.scss';

const ApartmentPlans = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>RZUTY MIESZKAŃ</h2>
            <div className={styles.apartmentGrid}>
                {/* Tutaj umieść rzuty mieszkań jako obrazki */}
                {/* Przykład: */}
                <img src="/path/to/apartment1.jpg" alt="Rzut mieszkania 1" className={styles.apartmentImage} />
                <img src="/path/to/apartment2.jpg" alt="Rzut mieszkania 2" className={styles.apartmentImage} />
                {/* Dodaj więcej obrazków mieszkań */}
            </div>
        </div>
    );
};

export default ApartmentPlans;
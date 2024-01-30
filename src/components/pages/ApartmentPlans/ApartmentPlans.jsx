import styles from './ApartmentPlans.module.scss';

const ApartmentPlans = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>RZUTY MIESZKAŃ</h2>
            <div className={styles.apartmentGrid}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Piwnica</h3>
                        <p className={styles.description}>Informacje o piwnicy</p>
                    </div>
                    <img src="/images/piwnica.png" alt="Rzut piwnicy" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Parter</h3>
                        <p className={styles.description}>Informacje o parterze</p>
                    </div>
                    <img src="/images/parter.png" alt="Rzut parteru" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>1 piętro</h3>
                        <p className={styles.description}>Informacje o 1 piętrze</p>
                    </div>
                    <img src="/images/1pietro.png" alt="Rzut 1 piętra" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>2piętro</h3>
                        <p className={styles.description}>Informacje o 2 piętrze</p>
                    </div>
                    <img src="/images/2pietro.png" alt="Rzut 2 piętra" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Poddasze</h3>
                        <p className={styles.description}>Informacje o poddaszu</p>
                    </div>
                    <img src="/images/poddasze.png" alt="Rzut poddasza" className={styles.apartmentImage} />
                </div>
            </div>
        </div>
    );
};

export default ApartmentPlans;
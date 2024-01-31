import { useState } from 'react';
import styles from './ApartmentPlans.module.scss';

const ApartmentPlans = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>RZUTY MIESZKAŃ</h2>
            <div className={styles.apartmentGrid}>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/piwnica.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Piwnica</h3>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Numer</th>
                                    <th>Kondygnacja</th>
                                    <th>Wartość</th>
                                    <th>Dostępność</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> </td>
                                    <td>GARAŻ</td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="/images/piwnica.png" alt="Rzut piwnicy" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/parter.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Parter</h3>
                        <p className={styles.description}>Informacje o parterze</p>
                    </div>
                    <img src="/images/parter.png" alt="Rzut parteru" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/1pietro.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Piętro 1</h3>
                        <p className={styles.description}>Informacje o 1 piętrze</p>
                    </div>
                    <img src="/images/1pietro.png" alt="Rzut 1 piętra" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/2pietro.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>2 Piętro</h3>
                        <p className={styles.description}>Informacje o 2 piętrze</p>
                    </div>
                    <img src="/images/2pietro.png" alt="Rzut 2 piętra" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/poddasze.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Poddasze</h3>
                        <p className={styles.description}>Informacje o poddaszu</p>
                    </div>
                    <img src="/images/poddasze.png" alt="Rzut poddasza" className={styles.apartmentImage} />
                </div>
            </div>
            {selectedImage && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent}>
                        <span className={styles.closeButton} onClick={handleCloseModal}>x</span>
                        <img src={selectedImage} alt="Powiększone zdjęcie" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApartmentPlans;
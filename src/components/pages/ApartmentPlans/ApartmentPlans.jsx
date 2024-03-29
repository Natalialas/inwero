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
                        <h3 className={styles.sectionHeading}>Garaż</h3>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Numer</th>
                                    <th>Rodzaj</th>
                                    <th>Wartość</th>
                                    <th>Dostępność</th>
                                </tr>
                            </thead>
                            <tbody>
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
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Numer mieszkania</th>
                                    <th>Ilość pokoi</th>
                                    <th>Pow.(m2)</th>
                                    <th>Cena za m2</th>
                                    <th>Dostępność</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>U1</td>
                                    <td>1</td>
                                    <td>21,87</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                                <tr>
                                    <td>U2</td>
                                    <td>1</td>
                                    <td>28,35</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                                <tr>
                                    <td>U3</td>
                                    <td>2</td>
                                    <td>31,73</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                                <tr>
                                    <td>U4</td>
                                    <td>2</td>
                                    <td>31,73</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                                <tr>
                                    <td>U5</td>
                                    <td>1</td>
                                    <td>28,35</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                                <tr>
                                    <td>U6</td>
                                    <td>1</td>
                                    <td>21,87</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="/images/parter.png" alt="Rzut parteru" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/1pietro.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Piętro 1</h3>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Numer mieszkania</th>
                                    <th>Pow.(m2)</th>
                                    <th>Cena za m2</th>
                                    <th>Wartość</th>
                                    <th>Dostępność</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>U7</td>
                                    <td>21,87</td>
                                    <td>6.300</td>
                                    <td> </td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                                <tr>
                                    <td>U8</td>
                                    <td>28,35</td>
                                    <td>6.300</td>
                                    <td> </td>
                                    <td><b>SPRZEDANE</b></td>
                                </tr>
                                <tr>
                                    <td>M9</td>
                                    <td>31,73</td>
                                    <td>6.300</td>
                                    <td>199.899 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M10</td>
                                    <td>31,73</td>
                                    <td>6.300</td>
                                    <td>199.899 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M11</td>
                                    <td>55,50</td>
                                    <td>6.300</td>
                                    <td>349.650 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="/images/1pietro.png" alt="Rzut 1 piętra" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/2pietro.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>2 Piętro</h3>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Numer mieszkania</th>
                                    <th>Pow.(m2)</th>
                                    <th>Cena za m2</th>
                                    <th>Wartość</th>
                                    <th>Dostępność</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>M12</td>
                                    <td>55,50</td>
                                    <td>6.600</td>
                                    <td>366.300 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M13</td>
                                    <td>31,73</td>
                                    <td>6.600</td>
                                    <td>209.418 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M14</td>
                                    <td>31,73</td>
                                    <td>6.600</td>
                                    <td>209.418 zł zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M15</td>
                                    <td>55,50</td>
                                    <td>6.600</td>
                                    <td>366.300 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="/images/2pietro.png" alt="Rzut 2 piętra" className={styles.apartmentImage} />
                </div>
                <div className={styles.imageContainer} onClick={() => handleImageClick("/images/poddasze.png")}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Poddasze</h3>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Numer mieszkania</th>
                                    <th>Pow.(m2)</th>
                                    <th>Cena za m2</th>
                                    <th>Wartość</th>
                                    <th>Dostępność</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>M16</td>
                                    <td>61,66</td>
                                    <td>6.900</td>
                                    <td>425.454 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M17</td>
                                    <td>31,73</td>
                                    <td>6.900</td>
                                    <td>218.937 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M18</td>
                                    <td>31,73</td>
                                    <td>6.900</td>
                                    <td>218.937 zł zł</td>
                                    <td>Dostępne</td>
                                </tr>
                                <tr>
                                    <td>M19</td>
                                    <td>55,50</td>
                                    <td>6.900</td>
                                    <td>382.950 zł</td>
                                    <td>Dostępne</td>
                                </tr>
                            </tbody>
                        </table>
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
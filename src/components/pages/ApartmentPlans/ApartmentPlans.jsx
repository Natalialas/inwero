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
                <div className={styles.imageContainer}>
                    <div className={styles.imageInfo}>
                        <h3 className={styles.sectionHeading}>Garaż</h3>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Numer</th>
                                    <th>Rodzaj</th>
                                    <th>Wartość</th>
                                    <th>Dostępność</th>
                                    <th>Rzut</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP1.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP2.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP3.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP4.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP5.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP6.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP7.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>miejsce postojowe</td>
                                    <td>35.000 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/garaż/MP8.png")}>Zobacz</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img 
                        src="/images/piwnica.png" 
                        alt="Rzut piwnicy" 
                        className={styles.apartmentImage} 
                        onClick={() => handleImageClick("/images/piwnica.png")} 
                    />
                </div>
                <div className={styles.imageContainer}>
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
                                    <th>Rzut</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>U1</td>
                                    <td>1</td>
                                    <td>21,87</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/parter/U1.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>U2</td>
                                    <td>1</td>
                                    <td>28,35</td>
                                    <td>6.000</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/parter/U2.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>U3</td>
                                    <td>2</td>
                                    <td>31,73</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/parter/U3.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>U4</td>
                                    <td>2</td>
                                    <td>31,73</td>
                                    <td>6.000</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/parter/U4.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>U5</td>
                                    <td>1</td>
                                    <td>28,35</td>
                                    <td>6.000</td>
                                    <td><b>SPRZEDANE</b></td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/parter/U5.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>U6</td>
                                    <td>1</td>
                                    <td>21,87</td>
                                    <td>6.000</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/parter/U6.png")}>Zobacz</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img 
                        src="/images/parter.png" 
                        alt="Rzut parteru" 
                        className={styles.apartmentImage} 
                        onClick={() => handleImageClick("/images/parter.png")} 
                    />
                </div>
                <div className={styles.imageContainer}>
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
                                    <th>Rzut</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>U7</td>
                                    <td>21,87</td>
                                    <td>6.300</td>
                                    <td> </td>
                                    <td><b>SPRZEDANE</b></td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Piętro1/U7.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>U8</td>
                                    <td>28,35</td>
                                    <td>6.300</td>
                                    <td> </td>
                                    <td><b>SPRZEDANE</b></td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Piętro1/U8.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M9</td>
                                    <td>31,73</td>
                                    <td>6.300</td>
                                    <td>199.899 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Piętro1/M9.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M10</td>
                                    <td>31,73</td>
                                    <td>6.300</td>
                                    <td>199.899 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Piętro1/M10.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M11</td>
                                    <td>55,50</td>
                                    <td>6.300</td>
                                    <td>349.650 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Piętro1/M11.png")}>Zobacz</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img 
                        src="/images/1pietro.png" 
                        alt="Rzut piętra 1" 
                        className={styles.apartmentImage} 
                        onClick={() => handleImageClick("/images/1pietro.png")} 
                    />
                </div>
                <div className={styles.imageContainer}>
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
                                    <th>Rzut</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>M12</td>
                                    <td>55,50</td>
                                    <td>6.600</td>
                                    <td>366.300 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/2pietro.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M13</td>
                                    <td>31,73</td>
                                    <td>6.600</td>
                                    <td>209.418 zł</td>
                                    <td><b>REZERWACJA</b></td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/2pietro.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M14</td>
                                    <td>31,73</td>
                                    <td>6.600</td>
                                    <td>209.418 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/2pietro.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M15</td>
                                    <td>55,50</td>
                                    <td>6.600</td>
                                    <td>366.300 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/2pietro.png")}>Zobacz</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img 
                        src="/images/2pietro.png" 
                        alt="Rzut 2 piętra" 
                        className={styles.apartmentImage}
                        onClick={() => handleImageClick("/images/2pietro.png")}
                    />
                </div>
                <div className={styles.imageContainer}>
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
                                    <th>Rzut</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>M16</td>
                                    <td>61,66</td>
                                    <td>6.900</td>
                                    <td>425.454 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Poddasze/M16.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M17</td>
                                    <td>31,73</td>
                                    <td>6.900</td>
                                    <td>218.937 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Poddasze/M17.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M18</td>
                                    <td>31,73</td>
                                    <td>6.900</td>
                                    <td>218.937 zł</td>
                                    <td><b>REZERWACJA</b></td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Poddasze/M18.png")}>Zobacz</button></td>
                                </tr>
                                <tr>
                                    <td>M19</td>
                                    <td>55,50</td>
                                    <td>6.900</td>
                                    <td>382.950 zł</td>
                                    <td>Dostępne</td>
                                    <td><button className={styles.viewButton} onClick={() => handleImageClick("/images/Poddasze/M19.png")}>Zobacz</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img 
                        src="/images/poddasze.png" 
                        alt="Rzut poddasza" 
                        className={styles.apartmentImage}
                        onClick={() => handleImageClick("/images/poddasze.png")}
                    />
                </div>
            </div>
            {selectedImage && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={handleCloseModal}>x</span>
                        <img src={selectedImage} alt="Powiększone zdjęcie" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApartmentPlans;

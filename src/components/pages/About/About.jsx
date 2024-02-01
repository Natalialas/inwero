import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.aboutSection}>
        <Container className={styles.container}>
            <h2 className={styles.sectionTitle}>OSIEDLE BURSZTYNOWE</h2>
            <Row>
                <Col md={4}>
                    <Card className={styles.card}>
                        <Card.Body>
                            <div className={styles.icon}>
                                <img src="/images/loc-icon.png" alt="Doskonała lokalizacja" />
                            </div>
                            <Card.Title className={styles.cardTitle}>
                                Doskonała lokalizacja
                            </Card.Title>
                            <Card.Text className={styles.cardText}>
                                Osiedle Bursztynowe powstaje przy ulicy Bursztynowej w Morągu, co daje możliwość szybkiego dostępu do pełnej infrastruktury miasta.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.card}>
                        <Card.Body>
                            <div className={styles.icon}>
                                <img src="/images/bulding-icon.png" alt="Przemyślany projekt" />
                            </div>
                            <Card.Title className={styles.cardTitle}>
                                Przemyślany projekt
                            </Card.Title>
                            <Card.Text className={styles.cardText}>
                                Wysokiej jakości materiały budowlane oraz doświadczona ekipa wykonawcza, gwarantują komfort mieszkania na naszym osiedlu przez długie lata.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.card}>
                        <Card.Body>
                            <div className={styles.icon}>
                                <img src="/images/forest-icon.png" alt="Bliskość zielenii" />
                            </div>
                            <Card.Title className={styles.cardTitle}>
                                Bliskość zielenii
                            </Card.Title>
                            <Card.Text className={styles.cardText}>
                                Osiedle Bursztynowe usytuowane jest na uboczu, z okien mieszkań rozciąga się widok na tereny zielone, natomiast trasa do rynku zajmuje jedynie 5 minut.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <div className={styles.descriptionSection}>
                <Container>
                    <Row>
                        <Col>
                            <p><b>Osiedle Bursztynowe</b> to nowa inwestycja w Morągu szyta na miarę najbardziej wymagających klientów. Oferujemy kameralne osiedle zamknięte, dające poczucie przytulności i bezpieczeństwa. Nowoczesna architektura i szerokie spektrum metraży mieszkań umożliwi znalezienie lokalu mieszczącego się w budżecie nabywcy, jak również idealnie odpowiadającego na jego indywidualne potrzeby. Budynki mieszkalne zaplanowano jako kompleks z miejscami parkingowymi oraz komórkami lokatorskimi.</p>
                            <p>Docelowo <b>powstaną aż x mieszkania w x blokach</b>. Pierwszy etap budowy obejmuje x mieszkania w metrażach od x do x m2 w wygodnym i przemyślanym rozkładzie z dodatkową powierzchnią w postaci balkonu. Dzięki temu każdy – rodzina, młode małżeństwo, singiel – znajdzie wymarzone, idealnie dopasowane do swoich potrzeb mieszkanie. Osiedle Bursztynowe  w Morągu znajduje się w doskonałej lokalizacji, <b>w spokojnej i cichej okolicy niedaleko centrum miasta</b>.</p>
                            <p>Dobre inwestycje mieszkaniowe to połączenie trzech elementów: przemyślanego projektu, wysokiej jakości materiałów budowlanych oraz doświadczonej ekipy wykonawczej. Bursztynowe Osiedle zachwyca właśnie dlatego, że dołożyliśmy wszelkich starań, aby w inwestycji idealnie dopasować wszystkie te aspekty. Wykorzystujemy <b>wyłącznie sprawdzone materiały najwyższej jakości</b>, które gwarantują komfort mieszkania na długie lata.</p>
                        </Col>
                    </Row>
                </Container>
        </div>
    </div>
    );
};

export default About;
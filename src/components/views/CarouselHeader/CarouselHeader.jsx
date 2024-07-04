import { Carousel } from 'react-bootstrap';
import styles from './CarouselHeader.module.scss'

const CarouselHeader = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img
          className={`${styles.carouselImage} d-block w-100`}
          src="/images/carousel-1.jpg"
          alt="Drugie zdjęcie"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.carouselImage} d-block w-100`}
          src="/images/carousel-2.jpg"
          alt="Drugie zdjęcie"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.carouselImage} d-block w-100`}
          src="/images/carousel-3.jpg"
          alt="Drugie zdjęcie"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.carouselImage} d-block w-100`}
          src="/images/carousel-4.jpg"
          alt="Drugie zdjęcie"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHeader;
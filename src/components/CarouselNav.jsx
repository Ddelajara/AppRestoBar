
import Carousel from 'react-bootstrap/Carousel';
import DatosCar from '../assets/imagenes'


export function CarouselNav() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className='d-block w-100'
          src={DatosCar[0].img} 
          alt={DatosCar[0].alt}
          // style={{ height: '300px' }} // Ajusta la altura según tus necesidades
        />
        <Carousel.Caption>
          <h2>{DatosCar[0].title}</h2>
          <p>{DatosCar[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
          className='d-block w-100'
          src={DatosCar[1].img} 
          alt={DatosCar[1].alt}
          // style={{ height: '300px' }} // Ajusta la altura según tus necesidades
        />
        <Carousel.Caption>
          <h2>{DatosCar[1].title}</h2>
          <p>{DatosCar[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
          className='d-block w-100'
          src={DatosCar[2].img} 
          alt={DatosCar[2].alt}
          // style={{ height: '500px' }} // Ajusta la altura según tus necesidades
        />
        <Carousel.Caption>
          <h2>{DatosCar[2].title}</h2>
          <p>{DatosCar[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tarjetas from '../assets/imagenes'

export const CardsEventos = () => {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Tarjetas[5].img} />
            <Card.Body>
            <Card.Title>{Tarjetas[5].title}</Card.Title>
            <Card.Text>
              {Tarjetas[5].description}
            </Card.Text>
            <Button variant="secondary">Leer más</Button>
            </Card.Body>
        </Card>
    </>
  )
}

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tarjetas from '../assets/imagenes'

export function CardsFood() {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Tarjetas[3].img} />
            <Card.Body>
            <Card.Title>{Tarjetas[3].title}</Card.Title>
            <Card.Text>
                {Tarjetas[3].description}
            </Card.Text>
            <Button variant="secondary">Leer más</Button>
            </Card.Body>
        </Card>
    </>
);
}

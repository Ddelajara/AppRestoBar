import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tarjetas from '../assets/imagenes'

export const CardsDrink = () => {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Tarjetas[4].img} />
            <Card.Body>
            <Card.Title>{Tarjetas[4].title}</Card.Title>
            <Card.Text>
              {Tarjetas[4].description}
            </Card.Text>
            <Button variant="secondary">Leer más</Button>
            </Card.Body>
        </Card>
    </>
  )
}

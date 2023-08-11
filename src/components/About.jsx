import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import chef from '../../public/image/chef.jpg'
import { FooterPage } from './FooterPage'

export const About = () => {
  return (
    <>
      <div className="container fondo-about">
        <div className="about-text">
          <h2>Acerca de Nosotros</h2>
          <p className="justified-text">RestoBar Santiago es una joya de la gastronomía italiana en el corazón de Santiago. Fundada en el año 2003 por los reconocidos chefs italianos Carlo y Maria Bianchi, el restaurante es una extensión de su hogar en Ancona, Italia, que ha sido trasladado al dinámico paisaje culinario de Santiago.

          Especializados en auténtica comida italiana, RestoBar Santiago se enorgullece de ofrecer platos auténticos de todas las regiones de Italia, cada uno de ellos elaborado con los ingredientes más frescos y auténticos, importados directamente de la madre patria. Ya sea que prefieras un risotto cremoso, una pasta casera o una pizza al horno de leña, hay algo para todos en RestoBar Santiago.
        </p>
        </div>
        <div>
          <img className= "img-chef" src={chef} alt="Dueños" />
        </div>
      </div>

      <div className="container fondo-about">
        <div>
          <h5>Mapa de Referencia</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.188308556655!2d-70.62096402096802!3d-33.39225107337415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c8abc167ffcd%3A0xd073b44bb28632e7!2sAv.%20del%20Condor%20550%2C%208580676%20Huechuraba%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1691542813304!5m2!1ses-419!2scl" width="370" height="295" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="about-text">
            <h5>Formulario de contacto</h5>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Dirección de correo</Form.Label>
                  <Form.Control className="custom-input" type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Ingresar consulta</Form.Label>
                  <Form.Control className="custom-input" as="textarea" rows={5} />
              </Form.Group>
              <Button type="button" variant="secondary">Enviar</Button>
            </Form>
        </div>
      </div>
      <FooterPage />
    </>
  )
}

import autor from '../../public/image/autor.jpg'

export const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="container">
          <div className="row custom-row">
              <div className="col-md-6 col-lg-4 col-12 items-align">
                <a className="navbar-brand" href="/"><b>RestoBar@</b>Santiago
                </a>
                <p className="footer-text">
                  Gastronomía Internacional fundada en 2003 desde Italia-Ancona. RestoBar ha sido galardonado con el premio 'Mejor Cocina Italiana'.
                </p>
                <div className="social-icons">
                  <i className="fa-brands fa-facebook fa-lg"></i>
                  <i className="fa-brands fa-linkedin fa-lg"></i>
                  <i className="fa-brands fa-instagram fa-lg"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-12 center-image">
                <img className="my-image" src={autor} alt="DDLJ" />
              </div>
              <div className="col-md-6 col-lg-4 col-12">
                <h5>Proyecto Restaurante DWFS-C7 BootCamp UDD</h5>
                 <p className="footer-autor"> <i class="fa-regular fa-envelope"></i> dadelajara.dwfs7@bootcampudd.cl</p>
                <p className="footer-autor">
                    © {new Date().getFullYear()} RestoBar Santiago. Todos los derechos reservados.
                </p>

              </div>
          </div>
      </div>
    </footer>
  )
}

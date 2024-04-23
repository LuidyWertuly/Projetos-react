import '../Css/Footer.css';

function Footer() {
    return (
      <div className="footer">
  
        <div className="footer-logo">
          <img src="https://projeto-telecall-front-end.netlify.app/image/logorecortsm.png" alt="logo"/>
        </div>
  
        <div className="footer-contato">
          <h3>Contatos</h3>
          <p>luidywertuly@souunisuam.com.br</p>
          <p>pedrohenriquesilvaalmeida@souunisuam.com.br</p>
        </div>

        <div className="footer-redes-sociais">
          <h3>Nossas redes sociais</h3>
            <a href="#">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
        </div>
  
      </div>
    );
  }
  
  export default Footer;
  
import '../Css/Header.css';

function Header() {
  return (
    <div className="header">

      <div className="header-logo">
        <img src="https://projeto-telecall-front-end.netlify.app/image/mini-logo.png" alt="logo"/>
      </div>

      <div className="header-menu">
        <button>Funcionalidades</button>
        <a href="">Registre-se</a>
        <a href="">Entrar</a>
        <button><i className="fa-solid fa-circle-half-stroke"></i></button>
        <button>A+</button>
        <button>A-</button>
      </div>

    </div>
  );
}

export default Header;

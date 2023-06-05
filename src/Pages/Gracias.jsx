import "../assets/css/EstilosGracias.css";
import { Link } from "react-router-dom";
export const Gracias = () => {
  return (
    <>
      <section className="container-gracias">
        <Link to="/">
          <img className="icon" src="../src/assets/Iconoflecha.png" alt="" />
        </Link>
        <div className="caja-gracias">
          <h1 className="titulo-gracias">
            ¡Gracias por ponerte en contacto con nosotros!
          </h1>
          <h1 className="titulo-gracias-movil">¡Gracias!</h1>
          <p className="parrafo-gracias">
            Te responderemos en el menor tiempo posible✅
          </p>
          <div className="caja-boton">
          <a href="/" className="boton">Regresar al inicio</a>
          </div>
          
        </div>
      </section>
    </>

  );
};

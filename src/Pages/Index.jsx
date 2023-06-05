import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../Firebase/config";
import { NavLink, useNavigate } from "react-router-dom";
import { Header } from "../hooks/Header";
import { Carrusel } from "../hooks/Carrusel";


export const Index = () => {
  //const cerrar = () => {localStorage.clear()}

  return (
    <>
      <Header />
      <section className="secciones">
        <img
          className="img"
          src="./src/assets/Fast_food_Hamburger_Buns_Tomatoes_French_fries_576086_1280x853.jpg"
          alt=""
        />
      </section>
      <section className="secciones">
        <article className="bloque bienvenido">
          <h1 className="titulo">¿ESTÁS LISTO?</h1>
          <p className="descripcion">
            Sumérgete en un mundo de sabores irresistibles y disfruta de
            nuestras increíbles combinaciones de comida rápida. Desde
            hamburguesas jugosas con papas fritas crujientes hasta tacos
            sabrosos con refrescantes bebidas, tenemos algo para satisfacer
            todos los antojos.
          </p>
        </article>
        <article className="bloque contactos">
          <Carrusel />
        </article>
      </section>


    </>
  );
};

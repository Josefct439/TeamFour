import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/EstilosContact.css"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vuadhnf",
        "template_djhrcz7",
        form.current,
        "3cGF1eegEyXRRYWWJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.href = "/gracias"; 
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="container-form">
      <h1 className="text-form">Contactanos 🍔 </h1>
      <form ref={form} onSubmit={sendEmail} className="layout-form">
        <div className="campo-form">
          <label>Nombre completo</label>
          <input type="text" name="user_name" />
        </div>
        <div className="campo-form">
          <label>Correo electronico</label>
          <input type="email" name="user_email" />
        </div>
        <div className="campo-form">
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Contactar" />
      </form>
    </section>
  );
};
export default Contact;

import emailjs from "emailjs-com";
import { useState } from "react";
import "./Mailer.css";
import formImage from "../Assets/Images/form-image.png";

const Mailer = () => {
  const [result, Setresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_caynmi2",
        "template_q7m5aql",
        e.target,
        "user_zsIHXzzWFjwO3Ym3AhdW1"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
        Setresult(true);
        setTimeout(() => {
          Setresult(false);
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form-container">
        <img src={formImage} alt="Formulario" />
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input-name"
            type="text"
            name="name"
            placeholder="Nombre y apellido"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <input type="tel" name="telephone" placeholder="Teléfono" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Dejanos tu mensaje"
            required
          ></textarea>
          <div className="buttons-container">
            <button type="reset">Limpiar</button>
            <button type="submit">Enviar</button>
          </div>
          {result ? <p style={{color:'green', textAlign:'center', textTransform:'uppercase', paddingTop:'1rem'}}>¡Tu mensaje se ha enviado con exito!</p> : null}
        </form>
      </div>
    </>
  );
};

export default Mailer;

import React from "react";
import whatsapp from "../../assets/images/whatsapp.gif";
import email from "../../assets/images/email.gif";
import social from "../../assets/images/instagram.gif";

const Footer = () => {
  const content = {
    general: {
      backgroundColor: "#333",
      width: "100vw",
      height: "200px",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItem: "center",
      textAlign: "center",
    },
    tel: {
      width: "calc(100%/3)",
      heght: "100%",
      borderRight: "solid 3px #fff"
    },
    email: {
      width: "calc(100%/3)",
      heght: "100%",
      borderRight: "solid 3px #fff"
    },
    social: {
      width: "calc(100%/3)",
      heght: "100%",
      alignItem: "center",
    },
    animation: {
      marginTop: "25px",
      height: "130px",
      width: "130px",
    },
  };
  return (
    <footer style={content.general}>
      <div style={content.tel}>
        <img
          style={content.animation}
          src={whatsapp}
          alt="animação de telefone"
        />
        <p>Telefone e Whatsapp: (71) 3333-3333</p>
      </div>
      <div style={content.email}>
        <img style={content.animation} src={email} alt="animação de e-mail" />
        <p>E-mail para contato: logos@gmail.com</p>
      </div>
      <div style={content.social}>
        <img
          style={content.animation}
          src={social}
          alt="animação do intagram"
        />
        <p>Siga as nossas redes sociais!</p>
      </div>
    </footer>
  );
};

export default Footer;

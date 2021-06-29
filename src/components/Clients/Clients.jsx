import { Image } from "antd";
import React from "react";
import pessoa01 from "../../assets/images/pessoa01.jpg";
import pessoa02 from "../../assets/images/pessoa02.jpg";

import '../common/fonts.css'

const Clients = () => {
  const content = {
    general: {
      position: "relative",
      left: 0,
      top: "98px",
      display: "flex",
      flexDirection: "column",
      height: "577px",
      width: "100vw",
      background: "#1a7da5",
    },
    container: {
      display: "flex",
      justifyContent:"space-around",
      height: "50%",
    },
    p: {
      width: "450px",
      margin: "50px 50px",
      fontSize: "27px",
      fontFamily: "'Dancing Script', cursive",
      right: {position: "relative", right: -549}
    },
    image: {
        height: "250px",
        width: "320px",
        marginTop: 20 
    }
  };
  return (
    <section style={content.general}>
      <div style={content.container}>
        <Image style={content.image} src={pessoa01} />
        <p style={content.p}>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          voluptates in, quidem illum error hic vero aspernatur. Facilis nihil
          impedit sunt incidunt! Soluta excepturi, consectetur ex nisi eveniet
          ipsa amet."
        </p>
      </div>
      <div style={content.container}>
        <p style={content.p}>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          voluptates in, quidem illum error hic vero aspernatur. Facilis nihil
          impedit sunt incidunt! Soluta excepturi, consectetur ex nisi eveniet
          ipsa amet."
        </p>
        <Image style={content.image} src={pessoa02} />
      </div>
    </section>
  );
};

export default Clients;

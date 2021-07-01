import React from "react";
import { Card, Image } from "antd";
import image05 from "../../assets/images/06.jpg";
import vassoura from "../../assets/images/vassoura.jpg";
import pa from "../../assets/images/pa.jpg";
import { Typography } from "antd";
import '../common/fonts.css'

const { Title } = Typography;

const { Meta } = Card;

const SellingWinner = () => {
  const content = {
    general: {
      width: "100vw",
      height: "400px",
      color: "tomato",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItem: "center",
      textAlign: "center",
    },
    card1: {
      width: "calc(100%/3)",
      height: "100%",
      borderRight: "solid 3px #fff",
    },
    card2: {
      width: "calc(100%/3)",
      heght: "100%",
      borderRight: "solid 3px #fff",
    },
    card3: {
      width: "calc(100%/3)",
      heght: "100%",
      alignItem: "center",
    },
    animation: {
      marginTop: "25px",
      height: "100%",
      width: "130px",
    },
    imageCard: {
      width: 200,
      maxHeight: 200,
    },
    meta: {
      position: "relative",
      left: "-25px",
      bottom: "-21px",
      marginTop: "50px",
      paddingTop: "20px",
      width: "109%",
      height: "117px",
      backgroundColor: "#1d85c2",
      color: "#fff",
      alignItem: "center",
      borderRight: "solid 4px #fff ",
      
    },
    title: {
      color: "#fff",
    },
    h1: {
      backgroundColor: "#fff",
      color: "#e77414",
      paddingTop: "10px",
      fontFamily: "Roboto"
    },
  };
  return (
    <section style={content.general}>
      <Title style={content.h1}>Campeão de Vendas</Title>
      <div style={{ display: "flex", margin: 0, padding: 0 }}>
        <Card hoverable style={content.card1}>
          <Image style={content.imageCard} alt="example" src={image05} />
          <Meta
            style={content.meta}
            title={<h2 style={content.title}>Máquina</h2>}
            description={
              <p style={content.title}>Máquina para trabalho com solda</p>
            }
          />
        </Card>

        <Card hoverable style={content.card2}>
          <Image style={content.imageCard} alt="example" src={vassoura} />
          <Meta
            style={content.meta}
            title={<h2 style={content.title}>Vassoura</h2>}
            description={
              <p style={content.title}>Instrumento para limpeza do ambiente</p>
            }
          />
        </Card>

        <Card hoverable style={content.card3}>
          <Image style={content.imageCard} alt="example" src={pa} />
          <Meta
            style={content.meta}
            title={<h2 style={content.title}>Pá</h2>}
            description={
              <p style={content.title}>
                Instrumento que auxilia na coleta da sujeira
              </p>
            }
          />
        </Card>
      </div>
    </section>
  );
};

export default SellingWinner;

import { Typography } from "antd";
import React from "react";
import lesite from "../../assets/images/lesite.png";

const AuthorizedSection = () => {
  const content = {
    authorizedText: {
      alignItems: "center",
      color: "#fff",
    },
    logosResume: {
      fontSize: "27px",
      lineHeight: "55px",
      color: "#fff",
    },
    logosResumeTitle: {
      fontSize: "35px",
      color: "#fff",
    },
  };
  const { Title } = Typography;
  return (
    <section className="authorized-bg">
      <div className="authorized-container-right">
        <Title style={content.logosResumeTitle}>Logos Manutenção</Title>
        <p style={content.logosResume}>
          A <strong>Logos manutenção</strong> é uma empresa com foco em
          manutenção preventiva em equipamento de solda e impermeabilização de
          mantas
        </p>
      </div>
      <div className="authorized-container-left">
        <img className="authorized-logo" src={lesite} alt="logo lesite" />
        <Title style={content.authorizedText}>Representante autorizado</Title>
      </div>
    </section>
  );
};

export default AuthorizedSection;

import Title from "antd/lib/skeleton/Title";
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
      fontSize: "40px",
      color: "#fff",
    },
  };
  return (
    <section className="authorized-bg">
      <div className="authorized-container-left">
        <img className="authorized-logo" src={lesite} alt="logo lesite" />
        <Title style={content.authorizedText}>Representante autorizado</Title>
      </div>
      <div className="authorized-container-right">
        <Title style={content.logosResumeTitle}>Logos Manutenção</Title>
        <p style={content.logosResume}>
          A <strong>Logos manutenção</strong> é uma empresa com foco em
          manutenção preventiva em equipamento de solda e impermeabilização de
          mantas
        </p>
      </div>
    </section>
  );
};

export default AuthorizedSection;

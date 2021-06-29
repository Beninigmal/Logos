import React from "react";
import { Menu } from "antd";
import LogosLogo from "../../assets/images/logos.png";
import '../common/fonts.css'

const HeaderApp = () => {
  const content = {
    menu: {
      background: "#ffffff",
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      position: "relative", 
      top: "5px"
    }
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="/home" style={{ display: "flex" }}>
            <img className="logos-logo" src={LogosLogo} alt="Logo da Logos" style={{marginRight: "10px", marginTop: "10px" }} />
            <h2 style={content.h2}>Logos manutenção</h2>
          </a>
        </div>
        <Menu
          style={content.menu}
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
        >
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.Item key="Produtos">Produtos</Menu.Item>
          <Menu.Item key="Sobre">Sobre nós</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default HeaderApp;

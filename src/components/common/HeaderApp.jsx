import React from "react";
import { Menu } from "antd";
import LogosLogo from "../../assets/images/logos-logotipo.png";

const HeaderApp = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="/home">
            <img className="logos-logo" src={LogosLogo} alt="Logo da Logos" />
          </a>
        </div>
        <Menu style={{background: "#c0c0c0"}} mode="horizontal" defaultSelectedKeys={["Home"]}>
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.Item key="Produtos">Produtos</Menu.Item>
          <Menu.Item key="Sobre">Sobre nós</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default HeaderApp;

import "./App.css";
import "antd/dist/antd.css";

import { Layout, Space, Typography } from "antd";
import HeaderApp from "./components/common/HeaderApp";
import CarouselLogos from "./components/CarouselLogos/CarouselLogos";
import lesite from "./assets/images/lesite.png";

const { Header } = Layout;
const { Title } = Typography;

function App() {

  return (
    <Layout className="mainLayout">
      <Header>
        <HeaderApp />
        <CarouselLogos />
        <Space direction="vertical" className="authorized-representative">
          <img src={lesite} alt="logo lesite" />
          <Title style={{color: "#fff"}}>Representante autorizado</Title>
        </Space>
      </Header>
    </Layout>
  );
}

export default App;

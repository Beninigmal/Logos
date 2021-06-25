import "./App.css";
import "antd/dist/antd.css";

import { Layout, Typography } from "antd";
import HeaderApp from "./components/common/HeaderApp";
import CarouselLogos from "./components/CarouselLogos/CarouselLogos";

import bgAuthorized from "./assets/images/05.png";
import Footer from "./components/Footer/Footer";
import AuthorizedSection from "./components/AuthorizedSection/AuthorizedSection";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  

  return (
    <Layout className="mainLayout">
      <Header>
        <HeaderApp />
      </Header>
      <Content>
        <CarouselLogos />
        <AuthorizedSection />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;

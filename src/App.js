import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import HeaderApp from "./components/common/HeaderApp";
import CarouselLogos from "./components/CarouselLogos/CarouselLogos";
import Footer from "./components/Footer/Footer";
import AuthorizedSection from "./components/AuthorizedSection/AuthorizedSection";
import SellingWinner from "./components/SellingWinner/SellingWinner";
import Clients from "./components/Clients/Clients";


const { Header, Content } = Layout;


function App() {
  

  return (
    <Layout className="mainLayout">
      <Header>
        <HeaderApp />
      </Header>
      <Content>
        <CarouselLogos />
        <AuthorizedSection />
        <SellingWinner />
        <Clients />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;

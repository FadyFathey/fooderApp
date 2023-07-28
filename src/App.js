import Container from "react-bootstrap/esm/Container";
import Cards from "./components/card/Card";
import CarouselSlider from "./components/carousel/Carousel";
import Header from "./components/header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionInfo from "./components/utilts/sectionInfo";
import pizaa1 from "../src/components/imgs/pizza1.jpg";
import pizaa2 from "../src/components/imgs/pizza2.jpg";
import pizaa3 from "../src/components/imgs/pizza3.jpg";
import Imgs from "./components/aboutUs/imgs";
import AboutUsText from "./components/aboutUs/aboutUsText";
import TrendingText from "./components/trending/trendingText";
import trend1 from "../src/components/imgs/trend1.jpg";
import trend2 from "../src/components/imgs/trend2.jpg";
import trend3 from "../src/components/imgs/trend3.jpg";
import Discount from "./components/discount/discount";
import fo1 from "../src/components/imgs/fo1.jpg";
import fo2 from "../src/components/imgs/fo2.jpg";
import fo3 from "../src/components/imgs/fo3.jpg";
import fo4 from "../src/components/imgs/fo4.jpg";
import fo5 from "../src/components/imgs/fo5.jpg";
import fo6 from "../src/components/imgs/fo6.jpg";
import FooterImgs from "./components/footer/footer";
import footerlogo from "../src/components/imgs/footerlogo.png";
import googleplay from "../src/components/imgs/googleplay.png";
import ios from "../src/components/imgs/ios.png";
import Footers from "./components/footer/footers";
import { useState } from "react";
function App() {
  const [cardData, setCardData] = useState({
    title1: "Thin Crusts",
    title2: "Pan",
    title3: "Stuffed",
    desc1:
      "With a chewy interior and crunchy, cracker-like edges, thin crusts are extremely fun to eat. Yet, they are incapable of holding too much weight, .",
    desc2:
      "As per the name, pizzas of this style are baked in a pan with oil. The dough is thick, whereas the crusts are crispy and caramelized. Pan pizza originates in Kansas ",
    desc3:
      "Stuffed pizza’s origin can be traced back to Nancy and Rocco and their pizzeria. Unlike other pizzas, stuffed pizza has a deeper density and is filled with toppings  ",
    title4: "Tavern/Square Cut",
    title5: "Neapolitan Pizza",
    title6: "New York Pizza",
    desc4:
      "This style of pizza refers to how it is cut: into small, bite-sized squares instead of triangles. If you are searching for brilliant starter ideas or a party-ready dish, .",
    desc5:
      "Neapolitan pizza finds its origin in Naples, Italy. Originally, it was made and consumed only by the peasants since it had tomatoes, which were wrongfully ",
    desc6:
      "New York pizza is a simplified version of other pizzas: skip the bulky toppings, hold the cheese and the tomato sauce only. The pizza was remodeled from Nepotalian pizza ",
  });
  return (
    <div>
      <Header />
      <CarouselSlider />
      <div>
        <SectionInfo title={"PopularNow"} />
        <Row>
          <Col xl="4" md="6" sm="12">
            <Cards
              imgPath={pizaa1}
              title={cardData.title1}
              dec={cardData.desc1}
            />
          </Col>
          <Col xl="4" md="6" sm="12">
            <Cards
              imgPath={pizaa2}
              title={cardData.title2}
              dec={cardData.desc2}
            />
          </Col>
          <Col xl="4" md="6" sm="12">
            <Cards
              imgPath={pizaa3}
              title={cardData.title3}
              dec={cardData.desc3}
            />
          </Col>
        </Row>
        <SectionInfo title={"About Us"} />
        <Container>
          <Row>
            <Col xl="6" md="6" sm="12">
              <Imgs />
            </Col>
            <Col xl="6" md="6" sm="12">
              <AboutUsText />
            </Col>
          </Row>
          <SectionInfo title={"Trending"} />
          <Row className="justify-content-center">
            <Col xl="12">
              <TrendingText />
            </Col>
          </Row>
          <Row className="ml-xl-4">
            <Col xl="4" md="6" sm="12" className="ml-xl-4">
              <Cards
                imgPath={trend1}
                title={cardData.title4}
                dec={cardData.desc4}
              />
            </Col>
            <Col xl="4" md="6" sm="12" className="ml-xl-4">
              <Cards
                imgPath={trend2}
                title={cardData.title5}
                dec={cardData.desc5}
              />
            </Col>
            <Col xl="4" md="6" sm="12" className="ml-xl-4">
              <Cards
                imgPath={trend3}
                title={cardData.title6}
                dec={cardData.desc6}
              />
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col xl="12">
              <Discount />
            </Col>
          </Row>
          <Container fluid></Container>
        </Container>
        <Row>
          <Col
            xl="2"
            md="6"
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <FooterImgs path={fo1} />
          </Col>
          <Col
            xl="2"
            md="6"
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <FooterImgs path={fo2} />
          </Col>
          <Col
            xl="2"
            md="6"
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <FooterImgs path={fo3} />
          </Col>
          <Col
            xl="2"
            md="6"
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <FooterImgs path={fo4} />
          </Col>
          <Col
            xl="2"
            md="6"
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <FooterImgs path={fo5} />
          </Col>
          <Col
            xl="2"
            md="6"
            sm="12"
            className="d-flex justify-content-center align-items-center"
          >
            <FooterImgs path={fo6} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footers />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

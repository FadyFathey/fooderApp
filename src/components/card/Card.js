import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pz1 from "../imgs/pz1.jpg";
const Cards = (props) => {
  return (
    <div className="cardHolder">
      <Card style={{ width: "18rem" }} className="cards">
        <div style={{ position: "relative", paddingBottom: "56.25%" }}>
          <Card.Img
            variant="top"
            src={props.imgPath}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title className="cardTitle">{props.title}</Card.Title>
          <Card.Text className="cardDesc">{props.dec}</Card.Text>
          <Button variant="primary">buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

//This component displays each product in the products page
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SelectColor from "./Dropdown";

function Item(props) {
  //This is to handle when user clicks buy button
  function handleClick(e) {
    props.setH2Visibility("visible");
    props.setTotalPrice(parseFloat(props.totalPrice) + parseFloat(props.price));
  }

  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={`products/${props.image}`} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Card.Subtitle>£{props.price} each</Card.Subtitle>
          <SelectColor></SelectColor>
          <Button variant="primary" onClick={handleClick}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;

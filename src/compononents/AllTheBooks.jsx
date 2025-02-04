import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const Books = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        {fantasy.map((book) => {
          return (
            <Col key={`book-${book.asin}`} sm={6} md={4} lg={4}>
              <Card className="bg-dark border-0">
                <Card.Img variant="top" src={book.img} />
                <Card.Body className="bg-dark">
                  <Card.Title className="text-white">{book.title}</Card.Title>
                  <Card.Text className="text-white">{book.category}</Card.Text>
                  <Card.Text className="text-white">{book.price}$</Card.Text>
                  <Button className="bg-warning">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Books;

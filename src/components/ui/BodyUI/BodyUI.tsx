import { Col, Container, Row } from "react-bootstrap";
import "./BodyUI.css";
import PhotoTree from "../PhotoTree/PhotoTree";

const BodyUI: React.FC = () => {
  return (
    <Container className="Body-UI-Whole">
      <Row>
        <Col className="Photo-Tree-Column1">
            <PhotoTree></PhotoTree>
        </Col>
        <Col className="Photo-Tree-Column2">
            describe words
        </Col>
      </Row>
    </Container>
  );
};

export default BodyUI;

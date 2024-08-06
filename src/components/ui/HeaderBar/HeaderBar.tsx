import { Container, Row,Col } from "react-bootstrap";
import "./HeaderBar.css";

const HeaderBar: React.FC = () => {
  return (
    <Container className="Header-Bar-Whole">
        <Row>
            <Col xs={8} className="justify-content-start">&#x1f1e8;&#x1f1e6; &#127809; A Canadian Company Proudly Based In Greater Toronto Area  </Col>
            <Col xs={4} className="justify-content-end">Call/text us now! [your number goes here]</Col>
        </Row>
    </Container>
  );
};
export default HeaderBar;

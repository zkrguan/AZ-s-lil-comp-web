import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css"
import LeafletMap from "../../assets/LeafletMap/LeafletMap";


const FooterUI: React.FC = () => {
    return (
        <footer className="Footer-UI">
            <Container className="">
                <Row>
                    <Col className="Footer-Col">
                        <span>I am Footer</span>
                    </Col>
                    <Col className="Footer-Col">
                        <span>I am Footer</span>
                    </Col>
                    <Col className="Footer-Col">
                        <span>I am Footer</span>
                    </Col>
                    <Col className="Footer-Col">
                        <span>I am Footer</span>
                    </Col>
                </Row>
                    <LeafletMap></LeafletMap>
            </Container>
        </footer>
    )
}

export default FooterUI;
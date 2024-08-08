import { Button, Col, Container, Row } from "react-bootstrap"
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton"
import PhotoTree from "../PhotoTree/PhotoTree"
import "./LandingSection.css" 

const LandingSection = ()=>{
    return(
        <Row>
        <Col className="Photo-Tree-Column1">
            <PhotoTree></PhotoTree>
        </Col>
        <Col className="Photo-Tree-Column2">
          <Container className="Text-Box-Home">
            <Row>
              <h1>Eye Catcher</h1>
            </Row>
            <Row>
                <p>Slogon 1</p>
            </Row>
            <Row>
                <p>Slogon 2</p>
            </Row>
            <Row>
              <Col>
                <Button className="Browse-Project-Button" >
                  Our projects
                </Button>
              </Col>
              <Col className="Slogan-Quote-Col">
                  <GetQuoteButton></GetQuoteButton>
              </Col>
            </Row>
          </Container>

        </Col>
      </Row>
    )
}

export default LandingSection;
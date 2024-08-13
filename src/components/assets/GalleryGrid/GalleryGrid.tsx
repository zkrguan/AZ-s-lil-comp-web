import { Col, Container, Row } from "react-bootstrap";
import "./GalleryGrid.css"

const GalleryGrid : React.FC = ()=>{
    return (
        <div>
            <Container className="Gallery-Grid-Container">
                <div className="Gallery-Grid-Desc">
                    <h1 className="Gallery-Grid-Header">Hi</h1>
                    <span className="Gallery-Grid-Caption">I am some descriptions about the Gallery</span>
                </div>
                <Row>
                    <Col>
                        <img src={"/lower.png"}  />
                    </Col>

                    <Col>
                    <img src={"/lower.png"}   />
                    </Col>
                    
                    <Col>
                    <img src={"/lower.png"}  />
                    </Col>
                    
                    <Col>
                        <img src={"/lower.png"}  />
                    </Col>
                    
                    <Col>
                        <img src={"/lower.png"}  />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default GalleryGrid;


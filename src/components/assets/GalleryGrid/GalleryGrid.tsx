import {  Col, Container, Row } from "react-bootstrap";
import "./GalleryGrid.css"

const GalleryGrid: React.FC = () => {
    return (
        <div className="Gallery-Container Gallery">
            <Container className="Gallery-Grid-Container">
                <div className="Gallery-Grid-Desc">
                    <h1 className="Gallery-Grid-Header">Hi</h1>
                    <span className="Gallery-Grid-Caption">I am some descriptions about the Gallery</span>
                </div>
                <Row>
                    <Col className="Gallery-Grid-Column">
                        <img src={"/lower.png"} alt="Gallery item 1" />
                        <p className="Caption">describe 1</p>
                    </Col>

                    <Col className="Gallery-Grid-Column" >
                        <div>
                            <img src={"/lower.png"} alt="Gallery item 2" />
                           <p className="Caption">describe 2</p>
                        </div>
                    </Col>

                    <Col className="Gallery-Grid-Column">
                        <img src={"/lower.png"} alt="Gallery item 3" />
                        <p className="Caption">describe 3</p>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default GalleryGrid;
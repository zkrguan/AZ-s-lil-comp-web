import { Col, Container, Row } from 'react-bootstrap';
import './HighlightBanner.css'

const HighlightBanner = () => {
    return (
        <Container fluid className='Highlight-Banner-Container'>
            <Row>
                <Col className='Highlight-Banner-Background'>
                    <Row>
                        <img className='Icon-SVG' src='/diamond-icon.svg' alt="Icon"></img>
                    </Row>
                    <Row>
                        <h3>I am Highlight's Eye Catcher</h3>                        
                    </Row>
                    <Row>
                        <p> Detailed Highlight 1</p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <img className='Icon-SVG' src='/new-label-icon.svg' alt="Icon"></img>
                    </Row>
                    <Row>
                        <h3>I am Highlight's Eye Catcher</h3>                        
                    </Row>
                    <Row>
                        <p> Detailed Highlight 2</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HighlightBanner;

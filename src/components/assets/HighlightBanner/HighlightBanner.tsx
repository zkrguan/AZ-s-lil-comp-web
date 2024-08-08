import { Col, Container, Row } from 'react-bootstrap';
import './HighlightBanner.css'

const HighlightBanner = ()=>{
    return (
        <Container className='Highlight-Banner-Container'>
            <Row className='Row'>
                <Col>
                    <Row>
                        <img className='Icon-SVG' src='/diamond-icon.svg'></img>
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
                        <img className='Icon-SVG' src='/new-label-icon.svg'></img>
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
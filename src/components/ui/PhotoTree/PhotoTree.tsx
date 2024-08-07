import { Col, Container, Row } from "react-bootstrap";
import "./PhotoTree.css";

const PhotoTree: React.FC = () => {
  return (
   <Container className="Photo-Tree">
     <Row>
        <Col className="Left-Tree Tree">
            <img className="tree-img" src="/1.jpg" />
            <img className="tree-img"src="/2.jpg" />
            <img className="tree-img"src="/2.jpg" />
            <img className="tree-img"src="/2.jpg" />
            <img className="tree-img"src="/3.jpg" />
            <img className="tree-img"src="/3.jpg" />
            <img className="tree-img"src="/3.jpg" />
            <img className="tree-img"src="/3.jpg" />
            <img className="tree-img"src="/3.jpg" />
            <img className="tree-img"src="/3.jpg" />
            <img className="tree-img"src="/3.jpg" />
            <img className="tree-img"src="/3.jpg" />
        </Col>

        <Col className="Right-Tree Tree">
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/4.jpg" />
            <img className="tree-img" src="/5.jpg" />
            <img className="tree-img" src="/6.jpg" />
        </Col>
     </Row>

   </Container>
  );
};
export default PhotoTree;
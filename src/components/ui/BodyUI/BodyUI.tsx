import {Container} from "react-bootstrap";
import "./BodyUI.css";

import LandingSection from "../../assets/LandingSection/LandingSection";
import HighlightBanner from "../../assets/HighlightBanner/HighlightBanner";

const BodyUI: React.FC = () => {
  return (
    <div>
      <Container className="Body-UI-Whole">
        <LandingSection></LandingSection>
      </Container>
      <HighlightBanner></HighlightBanner>
    </div>
  );
};

export default BodyUI;

import {Container} from "react-bootstrap";
import "./BodyUI.css";

import LandingSection from "../../assets/LandingSection/LandingSection";
import HighlightBanner from "../../assets/HighlightBanner/HighlightBanner";
import GalleryGrid from "../../assets/GalleryGrid/GalleryGrid";

const BodyUI: React.FC = () => {
  return (
    <div>
      <Container className="Body-UI-Whole">
        <LandingSection></LandingSection>
      </Container>
      <HighlightBanner></HighlightBanner>
      <GalleryGrid></GalleryGrid>
    </div>
  );
};

export default BodyUI;

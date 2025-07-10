import BrandStory from "../components/about/BrandStory";
import GalleryVisual from "../components/about/GalleryVisual";
import { Container } from "./style";

const About = () => {
  return (
    <Container>
      <GalleryVisual />
      <BrandStory />
    </Container>
  );
};

export default About;

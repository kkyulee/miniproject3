import GalleryVisual from "../components/photo/GalleryVisual";
import List from "../components/photo/List";
import { Container } from "./style";

const Photo = () => {
  return (
    <Container>
      <GalleryVisual />
      <List />
    </Container>
  );
};

export default Photo;

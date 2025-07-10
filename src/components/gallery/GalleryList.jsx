import GalleryItem from "./GalleryItem";
import { GalleryListStyle } from "./style";
import Masonry from "react-masonry-css";

const GalleryList = ({ data }) => {
  return (
    <GalleryListStyle>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {data.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </Masonry>
    </GalleryListStyle>
  );
};
export default GalleryList;

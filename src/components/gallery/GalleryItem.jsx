import { GalleryItemStyle } from "./style";
import { TiHeartOutline, TiEye, TiDownload } from "react-icons/ti";

const GalleryItem = ({ item }) => {
  const { webformatURL, tags, downloads, views, likes, user } = item;
  const tagArr = tags.split(",");
  return (
    <GalleryItemStyle>
      <p className="imgWrap">
        <img src={webformatURL} alt="" />
      </p>
      <h3 className="user"> {user}</h3>
      <ul>
        <li className="likes">
          <TiHeartOutline /> {likes}{" "}
        </li>
        <li className="views">
          <TiEye /> {views}{" "}
        </li>
        <li className="downloads">
          <TiDownload /> {downloads}{" "}
        </li>
      </ul>
      <p className="tags">
        {tagArr.map((item) => (
          <span key={item}>#{item.trim()}</span>
        ))}
      </p>
    </GalleryItemStyle>
  );
};
export default GalleryItem;

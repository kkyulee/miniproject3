import { useState } from "react";
import GalleryInput from "../components/gallery/GalleryInput";
import GalleryList from "../components/gallery/GalleryList";
import GalleryVisual from "../components/gallery/GalleryVisual";
import useAxios from "../hooks/useAxios";
import { Container } from "./style";

const Gallery = () => {
  const [text, setText] = useState("cat");
  const API_URL = `51124008-126520132940deed3c18e2695`;
  const url = `https://pixabay.com/api/?key=${API_URL}&q=${text}&image_type=photo`;
  const { state, loding, error } = useAxios(url);
  const onSearch = (txt) => {
    setText(txt);
  };
  if (loding) {
    return <div>...로딩중</div>;
  }
  if (error) {
    return <div>에러메세지</div>;
  }
  if (!state) {
    return null;
  }
  return (
    <Container>
      <GalleryVisual />
      <div className="inner">
        <GalleryInput onSearch={onSearch} />
        <GalleryList data={state.hits} />
      </div>
    </Container>
  );
};

export default Gallery;

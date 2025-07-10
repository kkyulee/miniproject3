import { useState } from "react";
import { GalleryInputStyle } from "./style";
import { IoSearch } from "react-icons/io5";

const GalleryInput = ({ onSearch }) => {
  const [text, setText] = useState("");
  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefualt();
    onSearch(text);
  };
  return (
    <GalleryInputStyle onSubmit={onSubmit}>
      <p>
        <input
          type="text"
          placeholder="이미지를 검색하세요"
          onChange={changeInput}
        />
        <button type="sibmit">
          <IoSearch size="28" color="#6c6c6c" />
        </button>
      </p>
    </GalleryInputStyle>
  );
};

export default GalleryInput;

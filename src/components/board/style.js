import styled from "styled-components";
export const GalleryVisualStyle = styled.div`
  width: 100%;
  height: 250px;
  background-image: url("./visual2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #fff;
  }
`;
export const GalleryInputStyle = styled.form`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    input[type="text"] {
      width: 500px;
      height: 60px;
      border: 1px solid #000;
      color: #333;
      box-sizing: border-box;
      padding: 10px;
      outline: none;
    }

    button {
    }
  }
`;

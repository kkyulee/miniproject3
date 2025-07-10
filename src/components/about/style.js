import styled from "styled-components";
export const GalleryVisualStyle = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("./visual1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: rgb(0, 56, 39);
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

export const BrandStoryStyle = styled.div`
  background-image: url("./aboutbg.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100vh;
  .swiper {
    width: 1400px;
    height: 800px;
    overflow: hidden;
  }
  .swiper-slide {
    margin: 80px auto;
    overflow: hidden;
    text-align: center;
    background: rgba(57, 134, 103, 0.5);
    h2 {
      width: 800px;
      font-size: 38px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    p {
      width: 800px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.8;
    }

    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

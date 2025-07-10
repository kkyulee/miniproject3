import styled from "styled-components";
export const GalleryVisualStyle = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("./visual3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color:rgb(47, 45, 45);
  }
`;
export const GalleryInputStyle = styled.form`
  margin-bottom: 120px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    input[type="text"] {
      width: 600px;
      height: 70px;
      color: #333;
      box-sizing: border-box;
      padding: 30px;
      outline: none;
      border-radius: 20px;
      border: 1px solid #6c6c6c;
      font-size: 18px;
    }

    button {
      border: none;
      background: transparent;
      transform: translateX(-150%);
    }
  }
`;
export const GalleryListStyle = styled.form`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;
export const GalleryItemStyle = styled.form`
  padding: 20px;
  .imgWrap {
    width: 420px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in;
    }
    &:hover img {
      transform: scale(1.2);
    }
  }
  .user {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  ul {
    display: flex;

    gap: 20px;
    li {
      text-align: center;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .tags {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 두 줄까지만 보여주고 말줄임 */
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;

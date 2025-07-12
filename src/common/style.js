import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: rgb(102, 156, 137);
  height: 120px;
  h1 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-15%);
    a {
      img {
        width: 250px;
      }
    }
  }
`;
export const NavStyle = styled.nav`
  position: absolute;
  align-items: center;
  right: 50px;
  top: 50%;
  transform: translateY(-15%);
  ul {
    display: flex;
    align-items: center;
    gap: 50px;
    li {
      font-size: 24px;
      font-weight: 700;

      &:hover a {
        color: rgb(33, 50, 44);
      }
      a {
        color: aliceblue;
      }
    }
  }
`;
export const FooterStyle = styled.footer`
  background: rgb(174, 174, 174);
  color: rgb(236, 236, 236);
  p {
    margin-bottom: 20px;
  }
`;
export const InnerStyle = styled.div`
  padding: 50px 0;
  width: 1400px;
  margin: auto;
  position: relative;
`;

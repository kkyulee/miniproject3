import Banner from "../components/home/Banner";
import Content from "../components/home/content";
import { Container } from "./style";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Content />
      </Container>
    </>
  );
};

export default Home;

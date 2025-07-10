import Layout from "./common/Layout";
import About from "./page/About";
import Board from "./page/Board";
import Gallery from "./page/Gallery";
import Home from "./page/Home";
import NotFile from "./page/NotFile";
import Photo from "./page/Photo";
import PhotoDetail from "./page/PhotoDetail";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/photo">
              <Route index element={<Photo />} />
              <Route path=":photoID" element={<PhotoDetail />} />
            </Route>
            <Route path="/board" element={<Board />} />
          </Route>
          <Route path="*" element={<NotFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

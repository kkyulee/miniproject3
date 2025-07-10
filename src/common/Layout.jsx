import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* 여기에 중첩된 컴포넌트가 렌더링됨 */}
      <Footer />
    </div>
  );
}
export default Layout;

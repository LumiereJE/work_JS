// 상단바를 고정하는 용도

import { Outlet } from "react-router-dom";
import logoWhite from "../images/tier_logo_white.png";
import alarm from "../images/bell.png";
import Container from "./Container";
import { UserContext } from "../context/UserStore"; // 만든거
import { useContext } from "react"; // Hook

const Layout = () => {
  const context = useContext(UserContext);
  const { color } = context;
  return (
    <Container color={color}>
      {/* 헤더 */}
      <header className="mainhead">
        <div className="logo2">
          <img src={logoWhite} alt="white" />
        </div>
        <div className="bell">
          <img src={alarm} alt="alarm" />
        </div>
      </header>

      <main>
        {/* 화면을 구성하는 자식요소가 올 자리 */}
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;

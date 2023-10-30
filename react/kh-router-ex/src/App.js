import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import SettingPage from "./pages/SettingPage";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";

// MyPage와 Setting page 추가 해보기
// Home에서 About, MyPage, Setting page 링크 보여주고 이동하도록
// 이동된 각 페이지에서는 홈으로 이동하는 링크 만들고 Home이동 되도록 만들기

function App() {
  return (
    <Router>
      <Routes>
        {/* 패스 경로가 아무것도 입력되지 않으면 Home으로 이동 */}
        {/* 이 중 하나라도 빈 path="/"이 있어야 함 */}
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/SettingPage" element={<SettingPage />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/Articles" element={<Articles />}>
            <Route path="/Articles/:id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

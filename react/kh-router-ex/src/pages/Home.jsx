import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // Link를 사용하지 않고 페이지 이동 기능을 넣어야 할 때 사용하는 Hook
  const navigate = useNavigate();
  return (
    <>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <Link to="/About">소개 페이지로 이동</Link>
      <br />
      <button onClick={() => navigate("/MyPage")}>My페이지</button>
      <br />
      <Link to="/MyPage">My 페이지로 이동</Link>
      <br />
      <Link to="/SettingPage">Setting 페이지로 이동</Link>
      <br />
      <ul>
        <li>
          <Link to="/profiles/frontend">frontend 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/backend">backend 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/database">database 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시판목록</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;

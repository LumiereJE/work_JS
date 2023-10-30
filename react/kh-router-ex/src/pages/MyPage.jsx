import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = false;

  if (isLogin) {
    return (
      <>
        <h1>MyPage</h1>
        <p>여기는 MyPage입니다.</p>
        {/* <Link to="/">Home으로 이동</Link> */}
        {/* -1을 하면 맨 위에거 하나 빼는 식임 → 이전페이지 */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </>
    );
  } else {
    return <Navigate to="/Login" replace={true} />;
  }
};

export default MyPage;

import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      {/* Outlet : 자식 컴포넌트가 렌더링 될 위치를 잡아줌  */}
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/1">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/1">게시글 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Articles;

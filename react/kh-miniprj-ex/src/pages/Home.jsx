// Home 화면
import { useNavigate } from "react-router-dom";
import { ButtonContainer, TransBtn } from "../components/ButtonContainer";
import imgButton from "../images/nedbank_s.png";

const Home = () => {
  // 페이지 이동할때 사용하는 navigate, Link
  const navigate = useNavigate();
  const onClickBtn = (num) => {
    switch (num) {
      case 1:
        navigate("/Memberlist");
        break; // 대소문자 구분 안함
      case 2:
        break;
      case 3:
        navigate("/Profile");
        break;
      case 4:
        navigate("/Setting");
        break;
      default:
    }
  };

  return (
    <>
      <div>
        <ButtonContainer>
          <TransBtn onClick={() => onClickBtn(1)}>회원리스트</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>뉴스 보기</TransBtn>
          <TransBtn onClick={() => onClickBtn(3)}>사진 업로드</TransBtn>
          <TransBtn onClick={() => onClickBtn(4)}>테마 변경</TransBtn>
        </ButtonContainer>
      </div>
      <div className="bdlogo">
        <img src={imgButton} alt="buttonImg" />
      </div>
    </>
  );
};
export default Home;

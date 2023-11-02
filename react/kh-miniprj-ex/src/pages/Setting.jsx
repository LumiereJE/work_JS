// 설정 페이지

import { ButtonContainer, TransBtn } from "../components/ButtonContainer";
import { useContext } from "react"; // 이건 Hook
import { UserContext } from "../context/UserStore"; // 이건 만든거

const Setting = () => {
  const context = useContext(UserContext);
  const { setColor } = context; // context에서 setColor 빼옴
  return (
    <>
      <ButtonContainer>
        <TransBtn>테마 설정</TransBtn>
      </ButtonContainer>
      <ButtonContainer>
        {/* 컬러값을 props로 전달 */}
        <TransBtn color="orange" onClick={() => setColor("orange")}>
          orange
        </TransBtn>
        <TransBtn color="green" onClick={() => setColor("green")}>
          green
        </TransBtn>
        <TransBtn color="darkgray" onClick={() => setColor("darkgray")}>
          darkgray
        </TransBtn>
        <TransBtn color="royalblue" onClick={() => setColor("royalblue")}>
          royalblue
        </TransBtn>
      </ButtonContainer>
      {/* 여기만 하면 안바뀜. Layout가서 context해줘야함 */}
    </>
  );
};

export default Setting;

import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

// color값만 바꾸는것임
const UserStore = (props) => {
  const [color, setColor] = useState(localStorage.getItem("bgcolor"));

  // context 버그중 하나인데, 새로고침하면 값이 저장안되고 날아가버림.
  // 값을 기억하도록 하는 함수 → 아래 3줄
  // bgcolor는 key값임
  useEffect(() => {
    localStorage.setItem("bgcolor", color);
  }, [color]);

  return (
    <UserContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserStore;

import axios from "axios";

// 바뀌면 안되는 값이라 대문자로만 구성
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인 기능 만들기
  memberLogin: async (id, pw) => {
    const login = {
      id: id,
      pwd: pw,
    };
    return await axios.post(KH_DOMAIN + "/users/login", login);
  },
};

export default AxiosApi;

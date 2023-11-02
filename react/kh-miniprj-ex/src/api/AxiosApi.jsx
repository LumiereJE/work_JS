import axios from "axios";

// 바뀌면 안되는 값이라 대문자로만 구성
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인 기능 만들기 - JSON방식으로 넣음
  memberLogin: async (id, pw) => {
    const login = {
      id: id,
      pwd: pw,
    };
    return await axios.post(KH_DOMAIN + "/users/login", login);
  },

  // 회원정보 조회 - URL형식으로 넣음 여기서 body는 name=${id}임
  memberList: async (id) => {
    return await axios.get(KH_DOMAIN + `/users/member/?id=${id}`);
  },
};

export default AxiosApi;

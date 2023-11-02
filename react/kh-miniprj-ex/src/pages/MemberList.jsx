// 회원 리스트 보기

import { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 원래 스타일 파일 따로 빼야 함.
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;

const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  min-width: 240px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const MemberList = () => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState("");
  const isLogin = window.localStorage.getItem("isLogin"); //브라우저에서 임시로 값을 저장
  if (isLogin !== "TRUE") navigate("/");

  useEffect(() => {
    // 서버 연결하는 부분. try~catch구문 없으면 오류났음.
    const memberList = async () => {
      try {
        const resp = await AxiosApi.memberList("ALL"); // 전체 조회
        if (resp.status === 200) setMemberList(resp.data); // 200은 언어로, OK라는 뜻임
        console.log(resp.data);
      } catch (e) {
        console.log("네트워크 에러" + e);
      }
    };
    memberList();
  }, []);

  const onClickMember = (id) => {
    // onClickMember에 id를 넣음
    console.log("onClick member ID : " + id);
  };

  return (
    <>
      <Container>
        {memberList &&
          memberList.map(
            (
              member //멤버리스트가 값이 있으면.
            ) => (
              <MemberInfoWrapper
                key={member.id}
                onClick={() => onClickMember(member.id)}
              >
                <MemberId>ID : {member.id}</MemberId>
                <MemberName>Name : {member.name}</MemberName>
                <MemberEmail>Email : {member.email}</MemberEmail>
                <MemberJoinDate>JoinDate : {member.join}</MemberJoinDate>
              </MemberInfoWrapper>
            )
          )}
      </Container>
    </>
  );
};

export default MemberList;

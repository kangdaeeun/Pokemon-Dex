import styled from "styled-components";

const DashBoardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  border: 5px solid orange;
  margin: 5px;
`;

const DashBoard = () => {
  return (
    <>
      <DashBoardBox>넌 내 꺼야!!</DashBoardBox>
    </>
  );
};

export default DashBoard;
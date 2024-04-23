import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CoursesContainer = styled.div`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoData = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const NoDataTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const NoDataContent = styled.p``;

export const IconContainer = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: ${({ theme }) => theme.invertedBackground};

  display: flex;
  align-items: center;
  justify-content: center;
`;

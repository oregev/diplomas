import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeftSection = styled.div`
  height: 80%;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightSection = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const EmailWarning = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 3px;

  margin-bottom: 50px;
`;

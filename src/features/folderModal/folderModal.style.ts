import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 8px;
  background: rgba(0, 0, 0, 0.05);
`;

export const Content = styled.p`
  font-size: 14px;
`;

export const Warning = styled.span`
  color: red;
  margin-top: 3px;
  padding-inline-start: 10px;
  font-size: 12px;
`;

export const Helper = styled.p`
  color: ${({ theme }) => theme.label};
  margin-top: 20px;
  font-size: 12px;
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 0 25px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 28px;
  left: -26px;
  display: flex;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

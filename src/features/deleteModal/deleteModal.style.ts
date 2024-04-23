import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  padding: 10px 8px;
  background: rgba(0, 0, 0, 0.05);
`;

export const ContentContainer = styled.div`
  margin-bottom: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const Content = styled.p`
  font-size: 14px;
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 20px;
`;

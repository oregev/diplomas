import styled from "styled-components";

export const BodyContainer = styled.div`
  min-width: 300px;
  max-width: 1000px;
  padding: 20px 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 8px;
  background: rgba(0, 0, 0, 0.05);
`;

export const Title = styled.p`
  font-size: 14px;
`;

export const Content = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const FooterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

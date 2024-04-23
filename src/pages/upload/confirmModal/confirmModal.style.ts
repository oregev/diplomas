import styled from "styled-components";

export const BodyContainer = styled.div`
  min-width: 300px;
  max-width: 1000px;
  padding: 20px 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Content = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const FooterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

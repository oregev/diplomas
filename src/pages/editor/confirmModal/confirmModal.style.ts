import styled from "styled-components";

export const BodyContainer = styled.div`
  min-width: 300px;
  max-width: 1000px;
  padding-inline-start: 8px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 20px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.04);
`;

export const Field = styled.p`
  color: ${({ theme }) => theme.label};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: bold;
  margin-inline-start: 5px;
`;

export const FooterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Template = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TemplateField = styled.p`
  color: ${({ theme }) => theme.label};
  font-size: 14px;
`;

export const Signature = styled.div`
  margin: 20px 0 10px 0;
`;

export const Image = styled.div`
  text-align: center;
`;

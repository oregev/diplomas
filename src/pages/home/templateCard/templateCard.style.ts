import styled from "styled-components";

export const TemplateCardContainer = styled.div`
  width: 99%;
  height: 50px;
  padding: 0px 20px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 14px;
`;

export const ActionBar = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  transition: 0.2;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

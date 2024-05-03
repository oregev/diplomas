import styled from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 100%;
  border-inline-end: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const EmailWarning = styled.div`
  margin-bottom: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

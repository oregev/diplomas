import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  padding: 0 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

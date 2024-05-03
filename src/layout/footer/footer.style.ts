import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 60px;
  padding-inline: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.p`
  font-size: 12px;
`;

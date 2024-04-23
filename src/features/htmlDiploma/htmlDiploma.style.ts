import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  padding: 20px 10px;

  border-radius: 10px;
  font-family: Rubik-regular;
  background: white;
  color: rgba(33, 33, 33, 1);
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderImage = styled.img`
  width: 500px;
  height: 80px;
`;

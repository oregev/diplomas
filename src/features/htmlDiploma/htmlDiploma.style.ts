import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  max-width: 500px;

  border-radius: 10px;
  font-family: Rubik-regular;
  background: white;
  color: rgba(33, 33, 33, 1);
  box-shadow: ${({ theme }) => theme.boxShadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 80px;
`;

import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 60px;
  padding: 0 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BodyContainer = styled.div`
  height: calc(100vh - 180px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  height: 60px;
  padding-inline: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  display: flex;
  align-items: center;
`;

export const ActionBarContainer = styled.div`
  width: 100%;
  padding: 20px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: ${({ theme }) => theme.invertedBackground};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const Tag = styled.div<{ $isOn: boolean }>`
  width: 100px;
  height: 20px;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  background: ${({ $isOn }) => ($isOn ? "green" : "red")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

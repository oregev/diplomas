import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 3px;
  padding: 0px 20px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div<{ $isEdit?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    opacity: ${({ $isEdit }) => ($isEdit ? 0.7 : 0)};
  }

  &:hover {
    svg {
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Title = styled.p`
  text-transform: capitalize;
`;

export const IconContainer = styled.div<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => `rotate(${$isOpen ? 180 : 0}deg)`};
`;

export const TemplatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 620px;
  height: 20px;

  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ClickContainer = styled.div`
  cursor: "pointer";
`;

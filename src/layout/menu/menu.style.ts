import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  &:hover {
    svg {
      opacity: 0.5;
    }
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 50px;

  [dir="ltr"] & {
    left: -10px;
  }
  [dir="rtl"] & {
    right: -10px;
  }

  padding: 10px 10px 0 10px;

  background: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  padding: 10px;
  width: 140px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 12px;

  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const ActionsContainer = styled.div`
  padding: 10px;
  border-top: 1px solid lightgray;
  color: ${({ theme }) => theme.text};
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Mode = styled.p`
  opacity: 0.7;
  text-transform: capitalize;
`;

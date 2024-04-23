import styled from "styled-components";

export const FormFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 140px;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: -30px;
  display: flex;
  align-items: center;
  animation: anim 1s;

  @keyframes anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

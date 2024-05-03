import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LeftSection = styled.div`
  position: relative;
  flex: 1;
  height: 500px;
  border-inline-end: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightSection = styled.div`
  flex: 1;
  height: 500px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AddContainer = styled.div`
  position: fixed;
  [dir="ltr"] & {
    left: 50px;
  }
  [dir="rtl"] & {
    right: 50px;
  }
  bottom: 110px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: rgba(97, 136, 194, 0.64);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

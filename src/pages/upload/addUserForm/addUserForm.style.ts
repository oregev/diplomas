import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  label {
    margin-bottom: 3px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 8px;
  background: rgba(0, 0, 0, 0.05);
`;

export const Content = styled.p`
  font-size: 14px;
`;

export const InputContainer = styled.div<{ $marginBottom?: boolean }>`
  position: relative;

  &:not(:last-child) {
    ${({ $marginBottom }) =>
      $marginBottom &&
      css`
        margin-bottom: 20px;
      `}
  }

  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div<{ $top?: number }>`
  position: absolute;
  top: ${({ $top }) => $top ?? 28}px;
  left: -26px;
`;

export const Range = styled.input`
  width: 380px;
`;

export const Duration = styled.span`
  font-size: 12px;
  margin-inline-start: 5px;
`;

export const RangeIconContainer = styled.div`
  position: absolute;
  top: 16px;
  left: -26px;
  display: flex;
  flex-direction: column;
`;

export const CheckboxIconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: -26px;
`;

export const Checkbox = styled.input``;

export const Select = styled.select`
  width: 400px;
  height: 40px;
  margin-top: 3px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};

  display: flex;
  align-items: center;
`;

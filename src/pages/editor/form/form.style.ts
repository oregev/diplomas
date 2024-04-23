import styled from "styled-components";

export const FormContainer = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  label {
    margin-bottom: 3px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 28px;
  left: -26px;
  display: flex;
  flex-direction: column;
`;

export const RangeContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const Range = styled.input`
  width: 370px;
  margin-top: 3px;
`;

export const Date = styled.input`
  width: 150px;
  height: 40px;
  margin-top: 3px;
  padding: 0 10px;

  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
`;

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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 12px;
  margin-bottom: -10px;
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const Duration = styled.span`
  font-size: 12px;
  margin-inline-start: 5px;
`;

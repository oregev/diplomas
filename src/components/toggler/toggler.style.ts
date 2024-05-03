import styled from "styled-components";

export const Toggler = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 40px;
  height: 20px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #707070;
  transition: background-color ease 0.3s;

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    width: 16px;
    height: 16px;
    background: #fff;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
  }

  &:checked {
    background-color: #4cd964;
  }

  &:checked:before {
    left: 22px;
  }

  cursor: pointer;
`;

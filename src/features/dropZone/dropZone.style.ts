import styled from "styled-components";

export const DropZone = styled.div<{ $width?: number; $height?: number }>`
  margin-bottom: 40px;
  width: ${({ $width }) => $width}px;
  padding: ${({ $height }) => ($height && $height < 100 ? 10 : 20)}px;
  border: ${({ $height }) => ($height && $height < 100 ? 2 : 5)}px dashed rgb(200, 200, 200);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: copy;
  transition: 0.4s;

  &:hover {
    scale: 1.1;
    border-color: green;
  }

  &:hover path {
    transition: 0.4s;
    stroke: green;
  }

  &:hover p {
    transition: 0.4s;
    color: green;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: rgb(200, 200, 200);
`;

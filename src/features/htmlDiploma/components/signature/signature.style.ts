import styled from "styled-components";

export const FooterContainer = styled.div`
  padding-inline: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SignatureContainer = styled.div`
  max-width: 190px;
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignatureImage = styled.img`
  max-width: 100px;
  height: 50px;
`;

export const SignatureText = styled.div`
  word-break: break-all;
  white-space: normal;
  margin-bottom: 30px;
  border-top: 1px solid;
`;

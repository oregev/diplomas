import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoDataContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const NoDataItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DiplomaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-inline: 50px;
`;

export const CounterContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 80px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`
  position: absolute;
  right: 50px;
  bottom: 100px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

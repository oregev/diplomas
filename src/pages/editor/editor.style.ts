import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 0;
  display: flex;
`;

export const LeftSection = styled.div`
  width: 100%;
  border-inline-end: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const RightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const NoDataItemContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NoDataItem = styled.div`
  margin-bottom: 10px;
`;

export const UploadContainer = styled.div`
  width: 400px;
`;

export const DropZoneContainer = styled.div`
  display: flex;
  justify-content: center;
`;

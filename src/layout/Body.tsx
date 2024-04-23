import { Outlet } from "react-router-dom";
import * as S from "./layout.style";

export const Body = (): JSX.Element => (
  <S.BodyContainer>
    <Outlet />
  </S.BodyContainer>
);

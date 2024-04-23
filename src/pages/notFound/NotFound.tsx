import { Link } from "react-router-dom";
import * as S from "./notFound.style";

export const NotFound = (): JSX.Element => (
  <S.Container>
    <p>Nothing here</p>
    <Link to="/home">return</Link>
  </S.Container>
);

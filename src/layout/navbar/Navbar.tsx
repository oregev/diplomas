import { Link } from "react-router-dom";
import { AppRoutes } from "../../router";

const style = {
  textDecoration: "none",
  color: "#333",
  fontSize: 14,
};

export const Navbar = (): JSX.Element => (
  <>
    <Link
      to={`/${AppRoutes.HOME}`}
      style={{ ...style, textTransform: "capitalize" }}
      state={{ index: 0 }}
    >
      {AppRoutes.HOME}
    </Link>
    <Link
      to={`/${AppRoutes.EDITOR}`}
      style={{ ...style, textTransform: "capitalize" }}
      state={{ index: 1 }}
    >
      {AppRoutes.EDITOR}
    </Link>
    <Link
      to={`/${AppRoutes.UPLOAD}`}
      style={{ ...style, textTransform: "capitalize" }}
      state={{ index: 2 }}
    >
      {AppRoutes.UPLOAD}
    </Link>
    <Link
      to={`/${AppRoutes.PREVIEW}`}
      style={{ ...style, textTransform: "capitalize" }}
      state={{ index: 3 }}
    >
      {AppRoutes.PREVIEW}
    </Link>
    <Link
      to={`/${AppRoutes.SHARE}`}
      style={{ ...style, textTransform: "capitalize" }}
      state={{ index: 4 }}
    >
      {AppRoutes.SHARE}
    </Link>
  </>
);

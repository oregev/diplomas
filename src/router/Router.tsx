import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Editor } from "../pages/editor";
import { Home } from "../pages/home";
import { Preview } from "../pages/preview";
import { Share } from "../pages/share";
import { Upload } from "../pages/upload";
import { NotFound } from "../pages/notFound";
import { AppRoutes } from "./router.config";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={`/${AppRoutes.HOME}`} state={{ index: 0 }} replace />,
        },
        {
          path: "home",
          // action: () => null,
          // loader: () => null
          // index: true,

          element: <Home />,
        },
        {
          path: "editor/:courseId/:templateId",
          element: <Editor />,
        },
        {
          path: "editor",
          element: <Editor />,
        },
        {
          path: "upload",
          element: <Upload />,
        },
        {
          path: "preview",
          element: <Preview />,
        },
        {
          path: "share",
          element: <Share />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/",
  }
);

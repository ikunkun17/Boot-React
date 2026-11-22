import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import todoRouter from "./todoRouter";
import productsRouter from "./productsRouter";
import BasicLayout from "../layouts/basicLayout";

const Loading = () => <div>Loading....</div>
const Main = lazy(() => import("../pages/mainPage"))
const About = lazy(() => import("../pages/aboutPage"))

const router = createBrowserRouter([
  {
    path: "/",
    Component: BasicLayout,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Loading />}><Main /></Suspense>
      },
      {
        path: "about",
        element: <Suspense fallback={<Loading />}><About /></Suspense>
      },
      todoRouter(),
      productsRouter()
    ]
  }
]);

export default router;
import type { RouteObject } from "react-router-dom";
import { lazyLoad } from "@components/asyncComponent";

// 异步加载页面组件
const Home = lazyLoad(() => import("@pages/Home"));
const About = lazyLoad(() => import("@pages/About"));
const Form = lazyLoad(() => import("@pages/Form"));
const Table = lazyLoad(() => import("@pages/Table"));

export const routes: RouteObject[] = [
  { path: "", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "form", element: <Form /> },
  { path: "table", element: <Table /> },
];

export const itemKeyPathMap = {
  Home: "/",
  About: "/about",
  Form: "/form",
  Table: "/table",
};

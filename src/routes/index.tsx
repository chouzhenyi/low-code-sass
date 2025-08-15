import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@pages/Layout";
import NotFound from "@pages/NotFound"; // 可以同步加载404页面
import { routes } from "./routes";

// 路由配置
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />, // 错误边界页面
    children: routes,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};
export default Routes;

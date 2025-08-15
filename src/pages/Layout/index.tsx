import { Outlet } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./index.module.scss";
import { itemKeyPathMap } from "@/routes/routes";
import { useNavigate, useLocation } from "react-router-dom";

const Layout = () => {
  type MenuItem = Required<MenuProps>["items"][number];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const items: MenuItem[] = [
    {
      key: "Home",
      label: "首页",
    },
    {
      key: "Form",
      label: "表单",
    },
    {
      key: "Table",
      label: "表格",
    },
    {
      key: "About",
      label: "关于",
    },
  ];

  const onClick = (item: any) => {
    const { key } = item;
    const path = itemKeyPathMap[key as keyof typeof itemKeyPathMap];
    navigate(path);
  };
  const defaultSelectedKeys = Object.entries(itemKeyPathMap)
    .filter(([key, path]) => path === pathname)
    .map(([key]) => key);

  return (
    <div className={styles.wrapper}>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={defaultSelectedKeys}
        mode="inline"
        items={items}
        onClick={onClick}
      />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

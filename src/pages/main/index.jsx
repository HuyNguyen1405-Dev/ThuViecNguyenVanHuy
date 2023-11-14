import React, { useState, useRef, useEffect } from "react";
import {
  SettingOutlined,
  FileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Avatar,
  Dropdown,
  Row,
  Col,
} from "antd";
import { Outlet, useLocation, Link } from "react-router-dom";
import AvatarUser from "../../assets/img/avatarUser.jpg";

import "./index.css";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, link) {
  return {
    key,
    icon,
    children,
    label,
    link,
  };
}

const items = [
  getItem("Hệ thống", "sub1", <SettingOutlined />, [
    getItem("Quyền", "1", <SettingOutlined />, null, "/quyen"),
    getItem("Đơn vị/ Phòng ban", "2", <SettingOutlined />, null, "/link2"),
    getItem("Chức vụ", "3", <SettingOutlined />, null, "/link3"),
    getItem("Vai trò", "4", <SettingOutlined />, null, "/link4"),
    getItem("Người dùng", "5", <UserOutlined />, null, "/nguoidung"),
  ]),
];

const handleMenuClick = (e) => {
  if (+e.key === 1) {
    console.log("Dây r");
  }
};

const CustomMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Mục 1</Menu.Item>
    <Menu.Item key="2">Mục 2</Menu.Item>
    <Menu.Item key="3">Mục 3</Menu.Item>
  </Menu>
);

function renderMenuItems(items) {
  return items.map((item) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.children)}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      );
    }
  });
}

const items1 = [getItem("Files", "6", <FileOutlined />)];

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [showMenu1, setShowMenu1] = useState(true);

  const [showMenu2, setShowMenu2] = useState(false);

  const handleMenu1Click = () => {
    setShowMenu1(true);
    setShowMenu2(false);
  };

  const handleMenu2Click = () => {
    setShowMenu2(true);
    setShowMenu1(false);
  };

  const logoRef = useRef(null);

  useEffect(() => {
    if (isCollapsed) {
      logoRef.current.style.opacity = 0;
    } else {
      logoRef.current.style.opacity = 1;
    }
  }, [isCollapsed]);

  let { pathname } = useLocation();

  pathname.replace("/", "");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider collapsed={isCollapsed} style={{ background: "white" }}>
        <div className="demo-logo-container">
          <div className="logo-collapse-wrapper">
            <div className="collapse-button">
              <Button
                type="primary"
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={
                  isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
              />
            </div>
            <div className="demo-logo-vertical">
              <img
                ref={logoRef}
                src="https://dtidev.quangnam.gov.vn/static/media/iconQTI.468ea187.svg"
                width="50px"
                height="50px"
                alt="Logo dashboard"
                style={{ transition: "opacity 0.3s ease-in-out" }}
              />
            </div>
          </div>
        </div>
        {showMenu1 && (
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={items.map((item) => item.key)}
            mode="inline"
          >
            {renderMenuItems(items)}
          </Menu>
        )}

        {showMenu2 && (
          <Menu defaultSelectedKeys={["21"]} mode="inline" items={items1} />
        )}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Row
            justify="space-between"
            align="middle"
            gutter={16}
            style={{ flex: 1 }}
          >
            <Col span={16}>
              <div>
                <Button type="primary" onClick={handleMenu1Click}>
                  Hệ thống
                </Button>
                <Button
                  type="primary"
                  onClick={handleMenu2Click}
                  style={{ marginLeft: 20 }}
                >
                  Báo cáo
                </Button>
              </div>
            </Col>
            <Col span={8}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  height: "100%",
                  marginRight: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 16,
                  }}
                >
                  <Avatar src={AvatarUser} style={{ height: 40, width: 40 }} />
                </div>
                <Dropdown overlay={CustomMenu} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 550,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Design by
          <a
            href="https://github.com/HuyNguyen1405-Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nguyen Van Huy
          </a>
          @ 2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;

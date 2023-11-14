import React from "react";
import { useState } from "react";
import "antd/dist/reset.css";
import { Col, Row, Image, Button } from "antd";
import { Typography } from "antd";
import { useLocation, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

//Import from project
import ImageLogin from "../../assets/img/image_login.jpg";
import "./index.css";
//================================================//

const { Title, Text } = Typography;

function Login() {
  const [size, setSize] = useState("large");

  const handleOnClick = () => {
    window.location.href = `https://bedtidev.quangnam.gov.vn/secure/token?redirectTo=${window.location.href}`;
  };

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const [cookies, setCookie] = useCookies(["token"]);

  if (token) {
    sessionStorage.setItem("token", token);
    setCookie("token", token, { path: "/" });
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-form-bg">
      <div className="form-login">
        <div className="left-image-form">
          <Row justify="center">
            <Col span={12} className="col-image-login">
              <div className="image-login">
                <Image
                  justify="center"
                  src={ImageLogin}
                  alt="Image Login"
                  preview={false}
                />
              </div>
            </Col>
            <Col span={9} className="right-form-login">
              <Title className="title-login">Đăng nhập</Title>
              <Text>HỆ THỐNG ĐÁNH GIÁ MỨC ĐỘ CHUYỂN ĐỔI SỐ TỈNH QUẢNG TRỊ</Text>
              <Button
                type="primary"
                size={size}
                style={{ marginTop: "20px" }}
                onClick={handleOnClick}
              >
                Đăng nhập
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Login;

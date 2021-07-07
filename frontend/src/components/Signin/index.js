// LOG IN PAGE
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import axios from "axios";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignIn = () => {
  const history = useHistory();

  const onFinish = (values) => {
    const accessToken = "rachel";
    fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //sessionStorage.setItem("token", response.token);

        if (response.user && response.user.user_type === "CLIENT") {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response));
          history.replace("/clienthome");
        }

        if (response.user && response.user.user_type === "AGENT") {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response));
          history.replace("/agencyhome");
        }
        // if (response.user && response.user.user_type === "AGENT") {
        //   console.log(response);
        //   history.replace("/agencyhome");
        // }

        // if (response.details) {
        //   console.log(response);
        //   history.replace("/agencyhome");
        // }
      })
      .catch((error) => {
        console.log("error from submitting: " + error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Text } = Typography;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ marginTop: 60 }}>
          <h2>LOG IN</h2>
          <p>Please fill in your details correctly to log in.</p>
        </Text>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <Form
          style={{
            width: "50%",
            justifyContent: "center",
            margin: 40,
            alignItems: "center",
          }}
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              //onClick={"/clienthome"}
              style={{ borderRadius: 20, backgroundColor: "mediumseagreen" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignIn;

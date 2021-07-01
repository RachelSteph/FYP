// LOG IN PAGE
import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography } from "antd";

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
  const onFinish = (values) => {
    fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
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

        //history.replace("/clientdrawer");
      })
      .catch((error) => {
        console.log("error from submitting: " + error);
      });
  };
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0";

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
              //onClick={onSubmit}
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

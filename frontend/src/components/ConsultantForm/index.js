//REGISTRATION FORM FOR CONSULTANTING AGENCIES
import React from "react";
import { Form, Input, Button, Typography } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const accessToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0";

    fetch("http://127.0.0.1:8000/api/agents/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        first_name: values.first_name,
        email: values.email,
        username: values.username,
        password: values.password,
        phone_number: values.phone_number,
        description: values.description,
        experienceyrs: values.experienceyrs,
        address: values.address,
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

  const { Title } = Typography;

  return (
    <div>
      <Typography
        style={{
          marginTop: 20,
          marginLeft: 50,
        }}
      >
        <Title level={2}>Consultant Sign Up Form</Title>
        <p>
          {" "}
          A registration Form for Consulting Agencies or Private Consultants.
          Please fill in your details correctly!
        </p>
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              {
                type: "string",
                message: "The input is not valid firstname",
              },
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
            style={{
              width: 500,
              marginTop: 10,
            }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
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

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                type: "string",
                message: "The input is not valid address!",
              },
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Agency Description"
            rules={[
              {
                required: true,
                message: "Please input your agency description!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="phone_number"
            label="contact"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="experienceyrs"
            label="Years Of Experience"
            rules={[
              {
                required: true,
                message: "Please input your years of experience!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                borderRadius: 20,
                //backgroundColor: "lightseagreen",
                backgroundColor: "mediumseagreen",
              }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;

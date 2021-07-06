import React from "react";
import { Form, Input, Button, Typography, Modal } from "antd";

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

const ConsultRegForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const accessToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NjYxOTc1LCJqdGkiOiJlMGM2ZGYxNjA1ZmM0ZjljOWQ2NzA4MGZkMGI5ZDEzYSIsInVzZXJfaWQiOjJ9.t5HsHwyGdW97MCjWa8ZFQa8DNtSVL4Jv2YYVd_Yks1g";

    fetch("http://127.0.0.1:8000/api/agents/13/", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        first_name: values.first_name,
        email: values.email,
        username: values.username,
        //password: values.password,
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

  //Modal Code
  function success() {
    Modal.success({
      content: "Changes done successfullu!",
    });
  }
  return (
    <div>
      <Typography>
        <Title level={2}>Edit Your Profile Details.</Title>
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          //   alignContent:'center'
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
              style={{ borderRadius: 20 }}
              onClick={success}
            >
              Submit Changes
            </Button>
            <Button
              type="primary"
              htmlType="reset"
              style={{ borderRadius: 20, marginLeft: 15 }}
            >
              Clear All Changes
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ConsultRegForm;

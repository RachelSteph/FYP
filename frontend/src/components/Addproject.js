import React from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";

function handleChange(value) {
  console.log(value);
}

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

const AddProject = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const accessToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0";

    fetch("http://127.0.0.1:8000/api/projects/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        agent: values.agent,
        name: values.name,
        status: values.status,
        description: values.description,
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

  const { Option } = Select;

  return (
    <div>
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
            name="agent"
            label="Agency name"
            rules={[
              {
                type: "string",
                message: "The input is not valid clientname",
              },
              {
                required: true,
                message: "Please input your clientname!",
              },
            ]}
            style={{
              width: 500,
            }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Project name"
            // tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your projects name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Project's Description"
            rules={[
              {
                type: "string",
                message: "The input is not valid description!",
              },
              {
                required: true,
                message: "Please input the project description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="status" label="Project Status">
            <Select
              labelInValue
              defaultValue={{ value: "INCOMPLETE" }}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="INCOMPLETE">Incomplete</Option>
              <Option value="COMPLETE">Complete</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ borderRadius: 20 }}
            >
              Submit
            </Button>
            <Button
              type="primary"
              htmlType="reset"
              style={{ borderRadius: 20, marginLeft: 15 }}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddProject;

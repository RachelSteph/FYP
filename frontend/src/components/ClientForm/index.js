import React, { useState } from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Typography } from 'antd';
import axios from 'axios';
const { Option } = Select;

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
    console.log('Received values of form: ', values);
    axios.post('your url',values).then((results) => {
        console.log(results)
    }).catch((err) => {
        console.log(err)
    })
  };

    const { Title } = Typography;


    
   
  return (
      <div>
        <Typography><Title level={2}>Client Sign Up Form</Title></Typography>
        <div style={{
            display: "flex",
            flexDirection:"row",
            justifyContent:'flex-start',
            //   alignContent:'center'
            marginTop:20
        }} >
            
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            >
            <Form.Item
                name="firstname"
                label="firstname"
                rules={[
                {
                    type: 'string',
                    message: 'The input is not valid firstname',
                },
                {
                    required: true,
                    message: 'Please input your firstname!',
                },
                ]}
                style={{
                    width: 500
                }}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="lastname"
                label="lastname"
                // tooltip="What do you want others to call you?"
                rules={[
                {
                    required: true,
                    message: 'Please input your last name!',
                },
                ]}
            >
                <Input />
            </Form.Item>

        <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
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
                    type: 'string',
                    message: 'The input is not valid address!',
                },
                {
                    required: true,
                    message: 'Please input your address!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="company"
                label="Company"
                rules={[
                {
                    required: true,
                    message: 'Please input your company!',
                },
                ]}
            >
                <Input
                style={{
                    width: '100%',
                }}
                />
            </Form.Item>

            <Form.Item
                name="phone"
                label="contact"
                rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
                ]}
            >
                <Input
                style={{
                    width: '100%',
                }}
                />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
    </div>
  );
};

export default RegistrationForm;


import React, { useState } from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Typography } from 'antd';
import axios from 'axios';
import { StarTwoTone } from '@ant-design/icons';
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

const AllRegForm = () => {
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
        <Typography><Title level={2} style={{margin: 10}}>Sign Up</Title></Typography>
        <div style={{
            display: "flex",
            flexDirection:"row",
            justifyContent:'flex-start',
            //   alignContent:'center'
            marginTop:20,
            
          
        }} >
            
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            >
            <Form.Item
                name="username"
                label="User Name"
                rules={[
                {
                    type: 'string',
                    message: 'The input is not valid username',
                },
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
                style={{
                    width: 500
                }}
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
                name="password"
                label="Password"
                rules={[
                {
                    type: 'string',
                    message: 'The input is not valid password!',
                },
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label=" Confirm password"
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
                name='role'
                label ="User Type"
                    
                rules={[{ required: true,}]}
                style ={{
                    width: '100%',
                    marginTop: 10,
                    justifyContent: 'flex-start',
                }}
                >
                <Select placeholder="Select Role">
                    <Option value="Agency">Agency</Option>
                    <Option value="Client">Client</Option>
                </Select>
            </Form.Item>
            
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Register
                </Button>
            </Form.Item>
            </Form>
        </div>
    </div>
  );
};

export default AllRegForm;


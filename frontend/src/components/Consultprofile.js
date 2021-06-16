import React from 'react';
import { Form, Input, Select, Button, Typography, Row, Col, Checkbox} from 'antd';
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

const ConsultRegForm = () => {
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
        <Typography style={{margin: 20}}><Title level={2}>Edit Your Agency Details</Title></Typography>
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
            name="name"
            label="Agency name"
            rules={[
            {
                type: 'string',
                message: 'The input is not valid agency name',
            },
            {
                required: true,
                message: 'Please input your agency name!',
            },
            ]}
            style={{
                width: 500
            }}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="address"
            label="Address"
            // tooltip="What do you want others to call you?"
            rules={[
            {
                required: true,
                message: 'Please input your address!',
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
            name="description"
            label="Agency Description"
            rules={[
            {
                type: 'string',
                message: 'The input is not valid description!',
            },
            {
                required: true,
                message: 'Please input your agency description!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="expertiseyears"
            label="Experise years"
            rules={[
            {
                type: 'number',
                required: true,
                message: 'Please input your expertise years!',
            },
            ]}
        >
            <Input
            style={{
                width: '100%',
                marginRight: 20
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
        <Form.Item name="checkbox-group" label="Expertise">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: '32px' }}>
                Information Technology
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: '32px' }}>
                Business Planning
              </Checkbox>
            </Col>
            
            
            
          </Row>
        </Checkbox.Group>
      </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{borderRadius: 20}}>
            Submit Changes
            </Button>
        </Form.Item>
        </Form>
        </div>
    </div>
  );
};

export default ConsultRegForm;

import React from 'react';
import { Form, Input, Button, Typography, DatePicker} from 'antd';
import axios from 'axios';

function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    function onOk(value) {
            console.log('onOk: ', value);
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

const AppForm = () => {
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
        <Typography style={{margin: 20}}><Title level={2}>Book your Appointments!</Title></Typography>
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
            label="clientname"
            rules={[
            {
                type: 'string',
                message: 'The input is not valid clientname',
            },
            {
                required: true,
                message: 'Please input your clientname!',
            },
            ]}
            style={{
                width: 500
            }}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="name"
            label="agencyname"
            // tooltip="What do you want others to call you?"
            rules={[
            {
                required: true,
                message: 'Please input your agency name!',
            },
            ]}
        >
            <Input />
        </Form.Item>

    

        <Form.Item
            name="description"
            label="Descrption"
            rules={[
            {
                type: 'string',
                message: 'The input is not valid description!',
            },
            {
                required: true,
                message: 'Please input the appointment description!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item label="DatePicker">
            <DatePicker showTime onChange={onChange} onOk={onOk} style= {{margin: 20}} />

        </Form.Item>

        
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{borderRadius: 20}}>
            Submit 
            </Button>
            <Button type="primary" htmlType="submit" style={{borderRadius: 20, marginLeft: 15}}>
            Cancel
            </Button>
        </Form.Item>
        </Form>
        </div>
    </div>
  );
};

export default AppForm;

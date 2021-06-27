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
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0';

  const [form] = Form.useForm();

  const onFinish = (values) => {
    fetch("http://127.0.0.1:8000/api/appointments/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        agent: values.agent,
        client: values.client,
        description: values.description,
        start_date: values.date,
        end_date: values.date,
        status: values.status,

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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        onFinishFailed={onFinishFailed}
        >
        <Form.Item
            name="client"
            label="Client Name"
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
            name="agent"
            label="Agency Name"
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

         <Form.Item label="Start Date">
            <DatePicker showTime onChange={onChange} onOk={onOk} style= {{margin: 20}} />

        </Form.Item>
        <Form.Item label="End Date">
            <DatePicker showTime onChange={onChange} onOk={onOk} style= {{margin: 20}} />

        </Form.Item>


        
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{borderRadius: 20}}>
            Submit 
            </Button>
            <Button type="primary" htmlType="reset" style={{borderRadius: 20, marginLeft: 15}}>
            Reset
            </Button>
        </Form.Item>
        </Form>
        </div>
    </div>
  );
};

export default AppForm;

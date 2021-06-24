import React from 'react';
import { Form, Input, Button, Select} from 'antd';
import axios from 'axios';

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
    console.log('Received values of form: ', values);
    axios.post('your url',values).then((results) => {
        console.log(results)
    }).catch((err) => {
        console.log(err)
    })
  };

  
  const { Option } = Select;

  return (
    <div>
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
            name="agent"
            label="Agency name"
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
            label="Project name"
            // tooltip="What do you want others to call you?"
            rules={[
            {
                required: true,
                message: 'Please input your projects name!',
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
                message: 'Please input the project description!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item 
            name ="status"
            label="Project Status">
              <Select
                        labelInValue
                        defaultValue={{ value: 'incomplete' }}
                        style={{ width: 120 }}
                        onChange={handleChange}
                      >
                        <Option value="incomplete">Incomplete</Option>
                        <Option value="complete">Complete</Option>
                    </Select>

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

export default AddProject;

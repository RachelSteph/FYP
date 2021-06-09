import { Drawer, Form, Button, Col, Row, Input, Select} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';


  const { Option } = Select;

 


const EditProfile = () => {
  const [visible, setvisible] = useState(true)
  //const [mobile, setmobile] = useState(true)
   const showDrawer = () => {
    setvisible(false)
    //setmobile(true)

  };

  const onClose = () => {
    setvisible(true)
  };
    return (
      <div>
            
        <Button type="primary" onClick={() => {
          showDrawer()
        }}>
           Create account
        </Button>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={() => {
                onClose()
              }} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={() => {
                onClose()
              }} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Please enter your email' }]}
                >
                  <Input placeholder="Please enter your email" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: 'Please enter address' }]}
                >
                  <Input placeholder="Please enter address" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="expertise"
                  label="Expertise"
                  rules={[{ required: true, message: 'Please choose the expertise' }]}
                >
                  <Select placeholder="Please choose the expertise">
                    <Option value="Information Technology">Information Technology</Option>
                    <Option value="Business Planning">Business Planning</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="experienceyears"
                  label="Experience Years"
                  rules={[{ required: true, message: 'Please write your years of experience' }]}
                >
                  <Input placeholder="Please enter years of experience" />
                </Form.Item>
              </Col>
              
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please write your agency description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please write your agency description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      
      </div>
    )
}

export default EditProfile;

  


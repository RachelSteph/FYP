import React from 'react';
import {Avatar, Typography, Row, Col, Button, Rate, PageHeader} from 'antd';
import { UserOutlined, CalendarOutlined, PhoneOutlined } from '@ant-design/icons';
import Comments  from '../components/Comments';

const list = [
    {
        id: 1 ,
        name: 'Artificial intelligence',
    },
    {
        id: 2,
        name: 'Cyber Security',

    },
]

const Agencyprofile = () => {
    const { Text } = Typography;
    return (
        <div>
            <PageHeader className="site-page-header" title="Agency Profile" style={{backgroundColor: 'lightgreen', height: 50, padding: 10}}/>
            <Row gutter={[16, 8]} style={{marginLeft: 10}}>
                <Col span={12} >
                    <Avatar style={{margin: 20}} size ={100}icon={<UserOutlined />} />
                    <Typography Style={{margin: 40}}><p>Agency Name</p></Typography>
                    <Typography Style={{margin: 40}}><p>Agency Descriptions here</p></Typography>
                    <Rate disabled defaultValue ={3} style={{margin: 10}}/>
                    
                </Col>
                <Col span={12}>
                    <Button type="primary" shape="round" icon={<CalendarOutlined />} size={80} style={{margin:40}}>
                    Set an Appointment
                    </Button>
                    <Button type="primary" shape="round" icon={<PhoneOutlined />} size={80} style={{marginLeft:40, marginTop: 10}}>
                    Contacts
                    </Button>    
                </Col>
            </Row>

            <Row style={{marginTop: 30, marginLeft: 10}}>
                <Col span={24}>
                    <Text strong italic>EXPERTISE CATEGORY</Text>
                    <ul style={{marginLeft:30, marginTop: 10}}>
                        {list.map(item => (
                            <li key={item.id}>
                                <div>{item.name}</div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>

            <Row style={{marginTop: 30, marginLeft: 10}}>
                <Col span={24}>
                    <Text italic strong>RATINGS AND REVIEWS</Text>
                    <Col span={12} style={{marginLeft: 20, marginTop: 10}}>
                        <Text italic style={{marginLeft: 20, marginTop: 10}}> Rate the agency's services</Text>
                        <Rate allowHalf allowClear={true} style={{marginLeft: 25, marginTop: 10}}/>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Text strong italic style={{marginLeft: 20, marginTop: 40}}> COMMENTS</Text>
                <Comments />
            </Row>
    
        </div>
    )
}

export default Agencyprofile;

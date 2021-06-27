import React, {useState, useEffect} from 'react';
import { Typography, Row, Col, Button, Rate, PageHeader} from 'antd';
import { CalendarOutlined, PhoneOutlined } from '@ant-design/icons';
import Comments  from '../components/Comments';
import axios from 'axios';


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
    const url ='http://127.0.0.1:8000/api/agents/';
    const [agencyprof, setAgencyprof] = useState([]);
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0';

    

    useEffect(()=>{
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setAgencyprof(response.data)
            })
    }, [url])
    return (
        <div>
            <PageHeader className="site-page-header" title="Agency Profile" style={{backgroundColor: 'lightgreen', height: 50, padding: 10}}/>
            <Row gutter={[16, 8]} style={{marginLeft: 10}}>
                <Col span={12}>
                    <ul>
                        {agencyprof.map(item => (
                            <>
                                <Typography style={{marginTop: 20}}><h2>{item.first_name}</h2></Typography>
                                <Typography style={{marginTop: 20}}><p>{item.description}</p></Typography>
                            </>
                        ))}
                    </ul>
                    <Typography style={{marginTop: 20}}><h2>Agency Name</h2></Typography>
                    <Typography style={{marginTop: 20}}><p>Agency Description</p></Typography>
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

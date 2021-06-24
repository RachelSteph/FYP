import React, {useState, useEffect}from 'react'
import { PageHeader, Descriptions, Button, Typography, Divider, Tabs} from 'antd';
import Projects from '../components/projects';
import Appointments from '../components/Appointment';
import EditProfile from '../components/Consultprofile';
import axios from 'axios';




const Agencyhome = () => {
    const { TabPane } = Tabs;
    const { Text } = Typography;
    const url ='http://127.0.0.1:8000/api/agents/';
    const [agency, setAgency] = useState([]);
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0';
    
    

    useEffect(()=>{
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setAgency(response.data)
            })
    }, [url])
    return (
        <div>
            <PageHeader title="Agency Home" style={{backgroundColor: 'lightgreen', height: 50, padding: 10}}
                extra= {[
                    <Button type="primary" shape="round" style=
                    {{backgroundColor: 'grey'}}> Log Out</Button>,

                ]}
            >     
            </PageHeader>
             <Tabs style={{margin: 15}}>
        <TabPane tab="Home" key="1">
  `       <Typography style={{margin: 30}}>
            <h1>Welcome!</h1>
            <p> Book an appointment with the best firms now! </p>
            </Typography>
          
            <Descriptions title="User Information" style={{margin: 30}}>
                <Descriptions.Item label="User Name">{agency.firstname}
                </Descriptions.Item>
                <Descriptions.Item label="Email">{agency.email}</Descriptions.Item>
                <Descriptions.Item label="Phone Number">{agency.phone_number}</Descriptions.Item>    
            </Descriptions>        
        </TabPane>
        <TabPane tab="Appointments " key="2">
            <div style={{margin:10}}>
              
                  <Typography style={{margin: 20}}>
                    <Text italic><h2>Appointments List</h2></Text>
                    <Appointments />
                      
                  </Typography>
                  
                
            </div>
            
        </TabPane>
        <TabPane tab="Edit Profile" key="3">
          <EditProfile/>
        </TabPane>

        <TabPane tab="Projects" key="4">
            <Text italic><h2>Projects</h2></Text>
            <Projects/>
        </TabPane>
      </Tabs>
      
      
      <Divider />
           
            
        </div>
    )
}

export default Agencyhome;








import React from 'react'
import { PageHeader, Layout, Row, Col, Descriptions, Button, Typography, Collapse, Divider, Tabs} from 'antd';
import Projects from '../components/projects';
import Appointments from '../components/Appointment';
import EditProfile from '../components/Consultprofile';




const Agencyhome = () => {
    const { TabPane } = Tabs;
    const { Text } = Typography;
    
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
                <Descriptions.Item label="User Name">Homeland</Descriptions.Item>
                <Descriptions.Item label="Email">homland@gmail.com</Descriptions.Item>
                <Descriptions.Item label="Address">Dar es Salaam</Descriptions.Item>    
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








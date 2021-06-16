import { React} from 'react';
import { Descriptions, Typography, Button, PageHeader, Divider, Tabs, Input, DatePicker, Collapse} from 'antd';
import ClientRegForm from '../components/Clientprofile';
import AppForm from '../components/AppForm';
import Clientapplist from '../components/Clientapplist';
import Clientprojectstatus from '../components/Clientprojectstatus';
function callback(key) {
  console.log(key);
}



const Tablayout = () => {
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  

  return (
    
    <>
     <PageHeader title="Client Home" style={{backgroundColor: 'lightgreen', height: 50, padding: 10}}
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
                  <Descriptions.Item label="User Name">Rayna</Descriptions.Item>
                  <Descriptions.Item label="Email">raynasteph@gmail.com</Descriptions.Item>
                  <Descriptions.Item label="Address">Dar es Salaam</Descriptions.Item>
                  <Descriptions.Item label="Company">Private</Descriptions.Item>
                  
          </Descriptions>        
        </TabPane>
        <TabPane tab="Appointments " key="2">
          
            <div style={{margin: 10}}>
              <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="Book an appointment" key="1">
                  <AppForm />
                  
                </Panel>
              </Collapse>
            </div>
            <div style={{margin:10}}>
              <Collapse defaultActiveKey={['2']} onChange={callback}>
                <Panel header="Appointments List" key="2">
                  <Typography style={{margin: 20}}>
                    <h2>Appointments List!</h2>
                    <Clientapplist />
                      
                  </Typography>
                  
                </Panel>
              </Collapse>
            </div>
            <div style={{margin:10}}>
              <Collapse defaultActiveKey={['3']} onChange={callback}>
                <Panel header="View on going project status" key="3">
                  <Typography style={{margin: 20}}>
                    <h2>View project status</h2>
                  </Typography>
                  <Clientprojectstatus />
                </Panel>
              </Collapse>
              

            </div>
        </TabPane>
        <TabPane tab="Edit Profile" key="3">
          <ClientRegForm/>
        </TabPane>
      </Tabs>
      
      
      <Divider />
      
      
      
    </>
  );
};


export default Tablayout;
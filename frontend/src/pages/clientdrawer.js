import { Layout, Descriptions, Typography, Button, PageHeader} from 'antd';
import React from 'react';
import { useHistory } from "react-router-dom";
import Appmodal from '../components/appmodal';



const Clientdrawer = () => {
  const history = useHistory();
  const profileClick = () =>{
    history.push('./clientprofile')
  }
  const appClick = () =>{
    history.push('./appmodal')
  }
  
  return (
    <div style ={{width: '1200'}}>
        <PageHeader title="Home" style = {{background: 'white', height: 50}}/>
        <Layout className="layout" style ={{margin: 20}}>
          <Typography style={{margin: 30}}>
          <h1>Welcome!</h1>
          <p> Book an appointment with the best firms now! </p>
          </Typography>
        
        <Descriptions title="User Information" style={{margin: 30}}>
                <Descriptions.Item label="User Name">Rayna</Descriptions.Item>
                <Descriptions.Item label="Email">raynasteph@gmail.com</Descriptions.Item>
                <Descriptions.Item label="Address">Dar es Salaam</Descriptions.Item>
                <Descriptions.Item label="Company">Private</Descriptions.Item>
                
        </Descriptions>
        
        <Button
          size="medium"
          style={{ backgroundColor: "lightblue" , width: 150, margin: 30}}
          onClick={profileClick}
        >
          
          Edit Profile
        </Button>
        <Appmodal/>
        
          
      
          
         
        </Layout>
    </div>
  )
}

export default Clientdrawer;

;


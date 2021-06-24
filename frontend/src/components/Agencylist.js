import React, {useEffect, useState} from 'react';
import { List, Button, Row, Typography, Input} from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';









const Agencylist = () => {
  const { Text } = Typography;
  const history = useHistory();
  const url ='http://127.0.0.1:8000/api/agents/';
  const [agents, setAgents] = useState([]);
  const handleRoute = () =>{
      history.push("/agencyprofile")
  }
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0';

    

    useEffect(()=>{
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setAgents(response.data)
            })
    }, [url])

    

    
  return (
    <div>
        <Row style={{margin: 10}}>
            <Text strong italic>List Of Agencies</Text>
            
            

        </Row>
        
        <List
            
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={agents}
            
          renderItem={item => (
            <List.Item
              key={item.first_name}
              
              extra={
                
                  
                  <Button type="primary" shape="round" onClick={handleRoute}> View Profile</Button>
                
              }
            >
          <List.Item.Meta
            
            title={item.first_name} 
            
            
          />
          <Row><Text strong>Email: </Text>{ item.email }</Row>
          <Row><Text strong>Phone Number: </Text>{ item.phone_number }</Row>
          <Row><Text strong>Agency Description: </Text>{item.description}</Row>
          <Row><Text strong>Years of Experience: </Text>{item.experienceyrs}</Row>
        </List.Item>
      )}
      />
      
    </div>
    )
  }

  export default Agencylist;











 
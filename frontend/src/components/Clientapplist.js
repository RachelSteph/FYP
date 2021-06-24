import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { List,  Row, Button, Typography } from 'antd';





/*const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    
    title: `Appointment ${i}`,
    agencyusername: `Agencyprofile`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    appointmenttime:
      '12:45pm',
  });
}*/




const Clientapplist = () => {
  //const { Text } = Typography;
  const url ='http://127.0.0.1:8000/api/appointments/';
  const [clientapp, setClientapp] = useState([]);
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0';

    

    useEffect(()=>{
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setClientapp(response.data)
            })
    }, [url])
  
  return (
    <div>     
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={clientapp}
            
          renderItem={item => (
            
            <List.Item
              key={item.title}
              
              extra={
                <Row>
                    <Button type="primary" shape="round"  size={'default'} style={{marginRight: 30}}>
                        Cancel
                    </Button>
                    
                </Row>
              }
            >
          <List.Item.Meta
            
            //title={item.title}
            
            description={item.description}
          />
          {item.agent} 

          {item.start_date}
        </List.Item>
      )}
    />
    
      </div>
    )
  }

  export default Clientapplist;











 
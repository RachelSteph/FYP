import React from 'react';
import { List,  Row, Button, Typography } from 'antd';





const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    
    title: `Appointment ${i}`,
    agencyusername: `Agencyprofile`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    appointmenttime:
      '12:45pm',
  });
}




const Clientapplist = () => {
  const { Text } = Typography;
  
  return (
    <div>
        <Row style={{marginTop: 20}}>
          <Text italic> View your Appointments Schedule </Text>
          <Button style={{marginLeft: 30}}>Calendar</Button>
          

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
            dataSource={listData}
            
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
            
            title={item.title}
            
            description={item.description}
          />
          {item.agencyusername} 

          {item.appointmenttime}
        </List.Item>
      )}
    />
    
      </div>
    )
  }

  export default Clientapplist;











 
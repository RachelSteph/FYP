import React from 'react';
import { List,  Select, Button, Row, Typography } from 'antd';



const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


function handleChange(value) {
  console.log(value); 
}

const Clientprojectstatus = () => {
  const { Option } = Select;
  const { Text } = Typography;
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
            dataSource={listData}
            
          renderItem={item => (
            <List.Item
              key={item.title}
              
              extra={
                <Row>
                  
                  Incomplete
                </Row>
              }
            >
          <List.Item.Meta
            
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
      />
      
    </div>
    )
  }

  export default Clientprojectstatus;











 
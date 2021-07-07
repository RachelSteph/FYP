import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { List, Row, Button } from "antd";

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
  const ref = useRef(JSON.parse(localStorage.getItem("user")));
  const url = "http://127.0.0.1:8000/api/appointments/";
  const [clientapp, setClientapp] = useState([]);
  const accessToken = JSON.parse(localStorage.getItem("user")).access;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setClientapp(response.data);
      });
  }, []);

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={clientapp}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <Row>
                <Button
                  type="primary"
                  shape="round"
                  size={"default"}
                  style={{ marginRight: 30 }}
                >
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
  );
};

export default Clientapplist;

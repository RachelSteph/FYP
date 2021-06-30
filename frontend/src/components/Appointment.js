import React, { useState, useEffect } from "react";
import { List, Row, Button, Typography } from "antd";
import axios from "axios";

/*const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    
    title: `Appointment ${i}`,
    clientusername: `Clientprofile`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    appointmenttime:
      '12:45pm',
  });
}*/

const Appointments = () => {
  const { Text } = Typography;

  const url = "http://127.0.0.1:8000/api/appointments/";
  const [appointment, setAppointment] = useState([]);
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0";
  const [deleteapp, setDeleteApp] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setAppointment(response.data);
      });
  }, [url]);

  useEffect(() => {
    axios
      .delete("http://127.0.0.1:8000/api/appointments/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setDeleteApp(response.data);
      });
  }, [url]);

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
        dataSource={appointment}
        renderItem={(item) => (
          <List.Item
            key={item.description}
            extra={
              <Row>
                <Button
                  type="primary"
                  shape="round"
                  size={"default"}
                  style={{ marginRight: 30 }}
                  onClick={deleteapp}
                >
                  Deny
                </Button>
                <Button type="primary" shape="round" size={"default"}>
                  Confirm
                </Button>
              </Row>
            }
          >
            <List.Item.Meta
              title={item.description}
              description={item.status}
            />
            {item.client.firstname}

            {item.start_date}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Appointments;

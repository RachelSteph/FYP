import React, { useState, useEffect, useRef } from "react";
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
  //const ref = useRef(JSON.parse(localStorage.getItem("user")));

  const { Text } = Typography;
  const [user, setuser] = useState({});

  const url = "http://127.0.0.1:8000/api/appointments/";
  const [appointment, setAppointment] = useState([]);
  const accessToken = JSON.parse(localStorage.getItem("user")).access;

  const [updateapp, setUpdateApp] = useState([]);
  const [isChanged, setisChanged] = useState(false);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setAppointment(response.data);
      });
    setuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // useEffect(() => {
  //   axios
  //     .update("http://127.0.0.1:8000/api/appointments/15", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       setUpdateApp(response.data);
  //     });
  // }, [url]);

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
        renderItem={(item) => {
          return <StatusComponent item={item} />;
          // <List.Item
          //   key={item.description}
          //   extra={
          //     <Row>
          //       <Button
          //         type="primary"
          //         shape="round"
          //         size={"default"}
          //         style={{ marginRight: 30 }}
          //         onClick={() => {
          //           setisChanged((i) => !i);
          //         }}
          //       >
          //         Deny
          //       </Button>
          //     </Row>
          //   }
          // >
          //   <List.Item.Meta
          //     title={item.description}
          //     description={isChanged ? "REJECTED" : item.status}
          //   />
          //   {item.client.firstname}

          //   {item.start_date}
          // </List.Item>
        }}
      />
    </div>
  );
};

export default Appointments;

function StatusComponent({ item }) {
  const [isChanged, setisChanged] = useState(false);
  return (
    <div>
      <List.Item
        key={item.description}
        extra={
          <Row>
            <Button
              type="primary"
              shape="round"
              size={"default"}
              style={{ marginRight: 30 }}
              onClick={() => {
                setisChanged((i) => !i);
              }}
            >
              Deny
            </Button>
          </Row>
        }
      >
        <List.Item.Meta
          title={item.description}
          description={isChanged ? "REJECTED" : item.status}
        />
        {item.client.firstname}

        {item.start_date}
      </List.Item>
    </div>
  );
}

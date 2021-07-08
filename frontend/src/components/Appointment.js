import React, { useState, useEffect, useRef } from "react";
import { List, Row, Button, Typography } from "antd";
import axios from "axios";

const Appointments = () => {
  const ref = useRef(JSON.parse(localStorage.getItem("user")));

  const { Text } = Typography;
  const [user, setuser] = useState({});

  const userData = JSON.parse(localStorage.getItem("user_data"));
  const url = "http://127.0.0.1:8000/api/appointments/" + userData.id;
  const [appointment, setAppointment] = useState([]);
  //const accessToken = JSON.parse(localStorage.getItem("user")).access;
  //const [isChanged, setisChanged] = useState(false);
  const accessToken = JSON.parse(localStorage.getItem("accesstoken"));
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
    //setuser(JSON.parse(localStorage.getItem("user")).user);
  }, []);

  // useEffect(() => {
  //   console.log(appointment);
  //   console.log(userData);
  //   const status = appointment.filter((state) => {
  //     if (userData.id === state.agent) {
  //       return state;
  //     }
  //   });
  //   console.log(status);
  //   setAppointment(status);
  // }, []);

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
        renderItem={
          (item) => {
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
          //StatusComponent item={item}
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
        }
      />
    </div>
  );
};

export default Appointments;

//function StatusComponent({ item }) {

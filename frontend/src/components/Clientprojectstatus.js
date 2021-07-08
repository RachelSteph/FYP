import React, { useEffect, useState, useRef } from "react";
import { List, Row } from "antd";
import axios from "axios";

const Clientprojectstatus = () => {
  const [user, setuser] = useState({});

  const url = "http://127.0.0.1:8000/api/projects/";
  const [clientpstatus, setClientpstatus] = useState([]);
  const accessToken = JSON.parse(localStorage.getItem("accesstoken"));
  const userData = JSON.parse(localStorage.getItem("user_data"));
  //const accessToken = JSON.parse(localStorage.getItem("user")).access;

  var list = [];

  useEffect(() => {
    // console.log(localStorage.getItem("user_data"));
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        //console.log(response);
        const status = response.data.filter((state) => {
          console.log(state);
          if (userData.first_name === state.client) {
            console.log(state);
            return state;
          }
        });
        setClientpstatus(status);
        setuser(JSON.parse(localStorage.getItem("user_data")));
      });
  }, []);

  useEffect(() => {
    console.log(clientpstatus);
    console.log(userData.first_name);

    const status = clientpstatus.filter((state) => {
      console.log(state);
      if (userData.first_name === state.client) {
        console.log(state);
        return state;
      }
    });
    //console.log(status);
    setClientpstatus(status);
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
        dataSource={clientpstatus}
        renderItem={(item) => (
          <List.Item key={item.name} extra={<Row>{item.status}</Row>}>
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.name}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Clientprojectstatus;

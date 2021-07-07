import React, { useEffect, useState, useRef } from "react";
import { List, Row } from "antd";
import axios from "axios";

const Clientprojectstatus = () => {
  const [user, setuser] = useState({});
  const url = "http://127.0.0.1:8000/api/projects/";
  const [clientpstatus, setClientpstatus] = useState([]);
  const accessToken = JSON.parse(localStorage.getItem("user")).access;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        //console.log(response);
        setClientpstatus(response.data);
      });
    setuser(JSON.parse(localStorage.getItem("user")).user);
  }, []);

  useEffect(() => {
    //console.log(clientpstatus);
    //console.log(user.id);
    const status = clientpstatus.filter((state) => {
      if (user.id === state.client) {
        return state;
      }
    });
    //console.log(status);
    setClientpstatus(status);
  }, [clientpstatus]);

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

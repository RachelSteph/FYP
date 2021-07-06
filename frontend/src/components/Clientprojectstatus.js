import React, { useEffect, useState } from "react";
import { List, Row } from "antd";
import axios from "axios";

const Clientprojectstatus = () => {
  const url = "http://127.0.0.1:8000/api/projects/";
  const [clientpstatus, setClientpstatus] = useState([]);
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NjYxOTc1LCJqdGkiOiJlMGM2ZGYxNjA1ZmM0ZjljOWQ2NzA4MGZkMGI5ZDEzYSIsInVzZXJfaWQiOjJ9.t5HsHwyGdW97MCjWa8ZFQa8DNtSVL4Jv2YYVd_Yks1g";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setClientpstatus(response.data);
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

import React, { useEffect, useState } from "react";
import { List, Select, Button, Row, Typography } from "antd";
import axios from "axios";
import AddProject from "./Addproject";
import { SaveOutlined } from "@ant-design/icons";

/*const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}*/

function handleChange(value) {
  console.log(value);
}

const Projects = () => {
  const { Option } = Select;
  const { Text } = Typography;
  const url = "http://127.0.0.1:8000/api/projects/";
  const [projects, setProjects] = useState([]);
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setProjects(response.data);
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
        dataSource={projects}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            extra={
              <Row>
                <Select
                  labelInValue
                  defaultValue={{ value: "INCOMPLETE" }}
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="INCOMPLETE">Incomplete</Option>
                  <Option value="COMPLETE">Complete</Option>
                </Select>
                ,
                <Button type="primary" shape="round">
                  {" "}
                  Generate Report
                </Button>
              </Row>
            }
          >
            <List.Item.Meta title={<a href={item.href}>{item.name}</a>} />
            {item.description}
          </List.Item>
        )}
      />
      <div style={{ marginTop: 20 }}>
        <Text strong italic>
          Add new Project Details
        </Text>
        <AddProject />
      </div>
    </div>
  );
};

export default Projects;

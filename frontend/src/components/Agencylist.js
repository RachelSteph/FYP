//  LISTS ALL AGENCIES AVAILABLE FOR SEARCHING IN CATEGORIES PAGE
import React, { useEffect, useState } from "react";
import { List, Button, Row, Typography } from "antd";
import axios from "axios";
import { useHistory } from "react-router";
import Searchbar from "../components/searchbar";

const Agencylist = () => {
  const { Text } = Typography;
  const history = useHistory();
  const url = "http://127.0.0.1:8000/api/agents/";
  const [agents, setAgents] = useState([]);
  const [onSearchAgents, setonSearchAgents] = useState([]);

  const handleRoute = (item) => {
    history.push({
      pathname: "/agencyprofile",
      state: { agent: item },
    });
  };
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
        setAgents(response.data);
      });
  }, [url]);

  const onSearch = (value) => {
    // console.log(agents);
    // setAgents()
  };

  const onChange = (e) => {
    let value = e.target.value;
    console.log(value);
    if (value === "") {
    } else {
      const agent = agents.filter((agent) => {
        if (agent.first_name === value) {
          return agent;
        }
      });
      setonSearchAgents(agent);
    }
  };

  return (
    <div>
      <Row style={{ margin: 10 }}>
        <Text strong italic>
          <h2>List Of Agencies</h2>
        </Text>
      </Row>
      <Row>
        <Searchbar onSearch={onSearch} onChange={onChange} />
      </Row>

      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={onSearchAgents.length === 0 ? agents : onSearchAgents}
        renderItem={(item) => (
          <List.Item
            key={item.first_name}
            extra={
              <Button
                type="primary"
                shape="round"
                style={{
                  backgroundColor: "mediumseagreen",
                }}
                onClick={() => {
                  handleRoute(item);
                }}
              >
                View Profile
              </Button>
            }
          >
            <List.Item.Meta title={item.first_name} />
            <Row>
              <Text strong>Email: </Text>
              {item.email}
            </Row>
            <Row>
              <Text strong>Phone Number: </Text>
              {item.phone_number}
            </Row>
            <Row>
              <Text strong>Agency Description: </Text>
              {item.description}
            </Row>
            <Row>
              <Text strong>Years of Experience: </Text>
              {item.experienceyrs}
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Agencylist;

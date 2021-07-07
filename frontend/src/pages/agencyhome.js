import React, { useState, useEffect } from "react";
import {
  PageHeader,
  Descriptions,
  Button,
  Typography,
  Divider,
  Tabs,
} from "antd";
import Projects from "../components/projects";
import Appointments from "../components/Appointment";
import EditProfile from "../components/Consultprofile";
import axios from "axios";
import { useHistory } from "react-router";
import Charts from "../components/charts";

const Agencyhome = () => {
  const { TabPane } = Tabs;
  const { Text } = Typography;
  const history = useHistory();
  const url = "http://127.0.0.1:8000/api/agents/";
  const [agency, setAgency] = useState([]);
  const [user, setuser] = useState({});
  const accessToken = JSON.parse(localStorage.getItem("user")).access;

  const handleRoute = () => {
    localStorage.removeItem("user");
    history.replace("/");
  };

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setAgency(response.data);
      });
  }, [url]);

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")).user);
  }, []);

  return (
    <div>
      <PageHeader
        title="Agency Home"
        style={{ backgroundColor: "mediumseagreen", height: 50, padding: 10 }}
        extra={[
          <Button
            type="primary"
            shape="round"
            style={{ backgroundColor: "grey" }}
            onClick={handleRoute}
          >
            {" "}
            Log Out
          </Button>,
        ]}
      ></PageHeader>
      <Tabs style={{ margin: 15 }}>
        <TabPane tab="Home" key="1">
          `{" "}
          <Typography style={{ margin: 30 }}>
            <h1>Welcome!</h1>
          </Typography>
          <Descriptions title="User Information" style={{ margin: 30 }}>
            <Descriptions.Item label="User Name">
              {user ? user.first_name : null}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{agency.email}</Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              {user ? user.phone_number : null}
            </Descriptions.Item>
          </Descriptions>
        </TabPane>
        <TabPane tab="Appointments " key="2">
          <div style={{ margin: 10 }}>
            <Typography style={{ margin: 20 }}>
              <Text italic>
                <h2>Appointments List</h2>
              </Text>
              <Appointments />
            </Typography>
          </div>
        </TabPane>
        <TabPane tab="Edit Profile" key="3">
          <EditProfile />
        </TabPane>

        <TabPane tab="Projects" key="4">
          <Text italic>
            <h2>Projects</h2>
          </Text>
          <Projects />
        </TabPane>
      </Tabs>

      <Divider />
    </div>
  );
};

export default Agencyhome;

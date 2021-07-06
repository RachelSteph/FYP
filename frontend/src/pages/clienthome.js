import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  Descriptions,
  Typography,
  Button,
  PageHeader,
  Divider,
  Tabs,
  Collapse,
} from "antd";
import ClientRegForm from "../components/Clientprofile";
import AppForm from "../components/AppForm";
import Clientapplist from "../components/Clientapplist";
import Clientprojectstatus from "../components/Clientprojectstatus";

function callback(key) {
  console.log(key);
}

const Tablayout = () => {
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  const url = "http://127.0.0.1:8000/api/clients/";
  const [client, setClient] = useState([]);
  const [user, setuser] = useState({});
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
        setClient(response.data);
      });
  }, [url]);

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <PageHeader
        title="Client Home"
        style={{ backgroundColor: "mediumseagreen", height: 50, padding: 10 }}
        extra={[
          <Button
            type="primary"
            shape="round"
            style={{ backgroundColor: "grey" }}
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
            <p> Book an appointment with the best firms now! </p>
          </Typography>
          <Descriptions title="User Information" style={{ margin: 30 }}>
            <Descriptions.Item label="User Name">
              {user ? user.first_name : null}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {user ? user.email : null}
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              {user ? user.phone_number : null}
            </Descriptions.Item>
            <Descriptions.Item label="First Name">
              {user ? user.first_name : null}
            </Descriptions.Item>
          </Descriptions>
        </TabPane>
        <TabPane tab="Appointments " key="2">
          <div style={{ margin: 10 }}>
            <Collapse defaultActiveKey={["1"]} onChange={callback}>
              <Panel header="Book an appointment" key="1">
                <AppForm />
              </Panel>
            </Collapse>
          </div>
          <div style={{ margin: 10 }}>
            <Collapse defaultActiveKey={["2"]} onChange={callback}>
              <Panel header="Appointments List" key="2">
                <Typography style={{ margin: 20 }}>
                  <h2>Appointments List!</h2>
                  <Clientapplist />
                </Typography>
              </Panel>
            </Collapse>
          </div>
          <div style={{ margin: 10 }}>
            <Collapse defaultActiveKey={["3"]} onChange={callback}>
              <Panel header="View on going project status" key="3">
                <Typography style={{ margin: 20 }}>
                  <h2>View project status</h2>
                </Typography>
                <Clientprojectstatus />
              </Panel>
            </Collapse>
          </div>
        </TabPane>
        <TabPane tab="Edit Profile" key="3">
          <ClientRegForm />
        </TabPane>
      </Tabs>

      <Divider />
    </>
  );
};

export default Tablayout;

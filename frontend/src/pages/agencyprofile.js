import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Button, Rate, PageHeader, Modal } from "antd";
import { CalendarOutlined, PhoneOutlined } from "@ant-design/icons";
import Comments from "../components/Comments";
import { useLocation } from "react-router";
import axios from "axios";
import AppForm from "../components/AppForm";

const list = [
  {
    id: 1,
    name: "Artificial intelligence",
  },
  {
    id: 2,
    name: "Cyber Security",
  },
];

const Agencyprofile = () => {
  const [user, setuser] = useState({});

  const { Text } = Typography;
  const url = "http://127.0.0.1:8000/api/agents/";
  const [agencyprof, setAgencyprof] = useState([]);
  const location = useLocation();
  const accessToken = JSON.parse(localStorage.getItem("user")).access;
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setAgencyprof(response.data);
      });
  }, [url]);

  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return location.state ? (
    <div>
      <PageHeader
        className="site-page-header"
        title="Agency Profile"
        style={{ backgroundColor: "lightgreen", height: 50, padding: 10 }}
      />
      <Row gutter={[16, 8]} style={{ marginLeft: 10 }}>
        <Col span={12}>
          <>
            <Typography style={{ marginTop: 20 }}>
              <h2>{location.state.agent.first_name}</h2>
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              <p>{location.state.agent.description}</p>
            </Typography>
            <Rate disabled defaultValue={3} style={{ margin: 10 }} />
          </>
        </Col>

        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<CalendarOutlined />}
            size={80}
            style={{ margin: 40 }}
            onClick={() => {
              showModal();
            }}
          >
            Set an Appointment
          </Button>
        </Col>
      </Row>
      <Modal
        title="APPOINTMENT FORM"
        visible={isModalVisible}
        onOk={() => {
          handleOk();
          <Typography>Book an appointment</Typography>;
        }}
        onCancel={handleCancel}
      ></Modal>

      <Row style={{ marginTop: 30, marginLeft: 10 }}>
        <Col span={24}>
          <Text strong italic>
            EXPERTISE CATEGORY
          </Text>
          <ul style={{ marginLeft: 30, marginTop: 10 }}>
            {list.map((item) => (
              <li key={item.id}>
                <div>{item.name}</div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row style={{ marginTop: 30, marginLeft: 10 }}>
        <Col span={24}>
          <Text italic strong>
            RATINGS AND REVIEWS
          </Text>
          <Col span={12} style={{ marginLeft: 20, marginTop: 10 }}>
            <Text italic style={{ marginLeft: 20, marginTop: 10 }}>
              {" "}
              Rate the agency's services
            </Text>
            <Rate
              allowHalf
              allowClear={true}
              style={{ marginLeft: 25, marginTop: 10 }}
            />
          </Col>
        </Col>
      </Row>
      <Row>
        <Text strong italic style={{ marginLeft: 20, marginTop: 40 }}>
          {" "}
          COMMENTS
        </Text>
        <Comments />
      </Row>
    </div>
  ) : null;
};

export default Agencyprofile;

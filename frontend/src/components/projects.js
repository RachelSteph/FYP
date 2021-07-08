import React, { useEffect, useState } from "react";
import { List, Select, Button, Row, Typography, Modal } from "antd";
import axios from "axios";
import AddProject from "./Addproject";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Projects = () => {
  //pdf creation
  function printReport() {
    const input = document.getElementById("reportpdf");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 30, 30);
      pdf.save();
    });
  }

  //modal
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
  function handleChange(value) {
    console.log(value);
    setSelectedItem(value);
  }
  //Select
  const { Option } = Select;

  function setChange(value) {
    console.log(value);
    //setSelectedOption(value);
  }

  //Typography
  const { Text } = Typography;
  //axios
  const [user, setuser] = useState({});

  const url = "http://127.0.0.1:8000/api/projects/";
  const [projects, setProjects] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  //const [selectedOption, setSelectedOption] = useState("");
  const accessToken = JSON.parse(localStorage.getItem("user")).access;

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
    setuser(JSON.parse(localStorage.getItem("user")).user);
  }, []);

  useEffect(() => {
    console.log(projects);
    console.log(user.id);
    const status = projects.filter((state) => {
      if (user.id === state.agent) {
        return state;
      }
    });
    console.log(status);
    setProjects(status);
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
        dataSource={projects}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            extra={
              <Row>
                <div style={{ marginRight: 20 }}>
                  <Select
                    labelInValue
                    defaultValue={{ value: "INCOMPLETE" }}
                    style={{ width: 120 }}
                    onChange={setChange}
                  >
                    {["COMPLETE", "INCOMPLETE"].map((choice) => {
                      return <Option value={choice}>{choice}</Option>;
                    })}
                    {/* <Option value="INCOMPLETE">Incomplete</Option>
                    <Option value="COMPLETE">Complete</Option> */}
                  </Select>
                </div>
                <Button
                  style={{
                    borderRadius: 20,
                  }}
                  onClick={() => {
                    showModal();
                    handleChange(item);
                  }}
                >
                  Generate Project Report
                </Button>
              </Row>
            }
          >
            <List.Item.Meta title={<a href={item.href}>{item.name}</a>} />
            {item.description}
          </List.Item>
        )}
      />

      <Modal
        title="PREVIEW PROJECT REPORT"
        visible={isModalVisible}
        onOk={() => {
          handleOk();
          printReport();
        }}
        onCancel={handleCancel}
      >
        <div id={"reportpdf"}>
          <Text
            strong
            style={{
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <h1>Consulting Service System</h1>
          </Text>
          <Text
            strong
            italic
            style={{
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <h2>PROJECT TITLE:{selectedItem.name}</h2>
          </Text>
          <Typography
            style={{
              marginTop: 15,
            }}
          >
            PROJECT DESCRIPTION:
            <p>{selectedItem.description}</p>
          </Typography>

          <Typography
            style={{
              marginTop: 15,
            }}
          >
            CURRENT PROJECT STATUS:
            <p>{selectedItem.status}</p>
          </Typography>
        </div>
      </Modal>
      <div style={{ marginTop: 20 }}>
        <Text strong italic>
          <h2>Add new Project Details</h2>
        </Text>
        <AddProject />
      </div>
    </div>
  );
};

export default Projects;

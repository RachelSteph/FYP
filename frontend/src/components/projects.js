import React, { useEffect, useState } from "react";
import { List, Select, Button, Row, Typography, Modal } from "antd";
import axios from "axios";
import AddProject from "./Addproject";

import { SaveOutlined } from "@ant-design/icons";
import Report from "./Report/reportgenerator";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Projects = () => {
  function printReport() {
    const input = document.getElementById("reportpdf");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save();
    });
  }
  const { Option } = Select;
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
  const { Text } = Typography;
  const url = "http://127.0.0.1:8000/api/projects/";
  const [projects, setProjects] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0";

  function handleChange(value) {
    console.log(value);
    setSelectedItem(value);
  }
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
                <div style={{ marginRight: 20 }}>{item.status}</div>
                <Button
                  onClick={() => {
                    showModal();
                    handleChange(item);
                  }}
                >
                  Report
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
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          handleOk();
          printReport();
        }}
        onCancel={handleCancel}
      >
        <div id={"reportpdf"}>
          <Typography>PROJECT TITLE: {selectedItem.name}</Typography>
          <Typography>PROJECT DESCRIPTION{selectedItem.description}</Typography>
          <Typography>AGENCY NAME: {selectedItem.agent}</Typography>
          <Typography>CURRENT PROJECT STATUS:{selectedItem.status}</Typography>
        </div>
      </Modal>
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

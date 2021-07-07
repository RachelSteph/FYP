import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comment, Form, Button, List, Input, Typography } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Comments = () => {
  const [user, setuser] = useState({});

  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Text } = Typography;
  const url = "http://127.0.0.1:8000/api/reviews/";
  const [comments, setComments] = useState([]);
  //const [uploadcomments, setUploadComments] = useState("");
  const accessToken = JSON.parse(localStorage.getItem("user")).access;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setComments(response.data);
      });
  }, [url]);

  const onFinish = (values) => {
    fetch("http://127.0.0.1:8000/api/reviews/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        comment: values.comment,
        agent: values.agent,
        author: values.author,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //sessionStorage.setItem("token", response.token);

        //history.replace("/clientdrawer");
      })
      .catch((error) => {
        console.log("error from submitting: " + error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div>
        <List
          style={{ margin: 20, width: "auto" }}
          className="comment-list"
          //header={`${data.length} replies`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.author}
                content={item.comment}
                datetime={item.date_issued}
              />
            </li>
          )}
        />
      </div>
    </div>
  );
};

export default Comments;

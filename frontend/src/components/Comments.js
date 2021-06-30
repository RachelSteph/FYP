import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Comment, Form, Button, List, Input } from 'antd';


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
/*const data = [
  {
    //actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    author: 'Han Solo',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];*/


const Comments = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const url ='http://127.0.0.1:8000/api/reviews/';
  const [comments, setComments] = useState([]);
  //const [uploadcomments, setUploadComments] = useState("");
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0';

  

  useEffect(()=>{
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setComments(response.data)
            })
    }, [url])

    const onFinish = (values) => {
    fetch("http://127.0.0.1:8000/api/reviews/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        comment: values.comment,
        //agent: values.agent,
        //client: values.client,
        

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
        <List style = {{margin: 20, width:'auto'}}
          className="comment-list"
          //header={`${data.length} replies`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={item => (
            <li>
              <Comment
                
                author={item.client}
                content={item.comment}
                datetime={item.date_issued}
              />
            </li>
          )}
        />
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        onFinishFailed={onFinishFailed}>
          <Form.Item name="comment">
            <TextArea rows={4} style={{margin: 10, width: 1300}}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit"  type="primary" style={{marginLeft: 20}}>
              Add Comment
            </Button>
          </Form.Item>
        </Form>
      
        
      
        
    </div>
  )
}

export default Comments;











  
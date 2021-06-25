import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from 'antd';
import moment from 'moment';

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
  const { TextArea } = Input;
  const url ='http://127.0.0.1:8000/api/reviews/';
  const [comments, setComments] = useState([]);
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
      
        <Form.Item>
          <TextArea rows={4} style={{margin: 10, width: 1300}}/>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit"  type="primary" style={{marginLeft: 20}}>
            Add Comment
          </Button>
        </Form.Item>
    
        
      
        
    </div>
  )
}

export default Comments;











  